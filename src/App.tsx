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

export default App;
