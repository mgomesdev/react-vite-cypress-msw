import { useEffect, useState } from "react";
import "./App.css";

const getUser = async () => {
   const req = await fetch("https://example.com/user");
   const resp = await req.json();
   return resp;
};

function App() {
   const [logged, setLogged] = useState(false);
   const [user, setUser] = useState<{ id: string; firstName: string; lastName: string } | null>(null);

   const handleLogin: React.FormEventHandler<HTMLFormElement> = (e) => {
      e.preventDefault();

      setLogged(true);
   };

   useEffect(() => {
      const getUserData = async () => {
         const result = await getUser();
         setUser(result);
      };

      getUserData();
   }, []);
   return (
      <div>
         <h1>Dados do usuario</h1>
         <ul>
            <li>ID: {user?.id}</li>
            <li>FirstName: {user?.firstName}</li>
            <li>LastName: {user?.lastName}</li>
         </ul>

         <form onSubmit={handleLogin}>
            <input type="text" name="email" />
            <input type="password" name="password" />
            <button>Entrar</button>
         </form>

         {logged && <h1>Logado com sucesso!</h1>}
      </div>
   );
}

export const Stepper = ({ counter }: { counter: number }) => {
   const [count, setCount] = useState(counter);

   const handleIncrement = () => setCount((prevState) => prevState + 1);

   const handleDecrement = () => setCount((prevState) => prevState - 1);

   return (
      <>
         <button
            data-cy="increment"
            onClick={() => {
               handleIncrement();
            }}
         >
            Increment
         </button>

         <button data-cy="decrement" onClick={handleDecrement}>
            Decrement
         </button>

         <span data-cy="count">{count}</span>
      </>
   );
};

export default App;
