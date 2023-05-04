import React, { useState } from "react";
import './App.css';
import LoginCard from './components/loginCard.js';
import RegistroCard from "./components/ResgisterCard.js";


const App = () => {
  const [showLogin, setShowLogin] = useState('');
  const [showRegistro, setShowRegistro] = useState('');
  const showLoginCard = () => {
    setShowRegistro(false);
  }
  const showRegistroCard = () =>{
    setShowRegistro(true);
  }

  return (
    <div className="App">
      <div className="container">
        <div className="wrapper">
          <h1> Seja bem vindo!</h1>
          <p>Você deseja fazer login ou se cadastrar?</p>
        </div>
        <div className="button-wrapper"> 
        <button onClick={showLoginCard} className="btn fill">Login</button>
          <button onClick={showRegistroCard} className="btn fill">Cadastre-se</button>
        </div>
          </div>
        <div>
          {showRegistro ? (
            <RegistroCard/>
          ):
            <LoginCard/>
          }
        </div>
        </div>
  );
  
}

export default App;