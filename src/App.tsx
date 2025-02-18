import { useState } from "react";
import "./App.css";

function App() {
   const [logged, setLogged] = useState(false);

   const handleLogin: React.FormEventHandler<HTMLFormElement> = (e) => {
      e.preventDefault();

      setLogged(true);
   };

   return (
      <div>
         <form onSubmit={handleLogin}>
            <input type="text" name="email" />
            <input type="password" name="password" />
            <button>Entrar</button>
         </form>

         {logged && <h1>Logado com sucesso!</h1>}
      </div>
   );
}

export const Stepper = ({ counter, onChange }: { counter: number; onChange?: (count: number) => void }) => {
   const [count, setCount] = useState(counter);

   const handleIncrement = () => setCount((prevState) => prevState + 1);

   const handleDecrement = () => setCount((prevState) => prevState - 1);

   return (
      <>
         <button
            data-cy="increment"
            onClick={() => {
               handleIncrement();
               onChange && onChange(1);
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
