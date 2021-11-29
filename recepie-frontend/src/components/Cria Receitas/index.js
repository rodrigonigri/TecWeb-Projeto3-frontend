import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

export default function Home(props) {
  return (
    <div className = 'CriaReceitasContainer'>
      <p>
        <span className="input">
          <input placeholder="Nome da receita"></input>
          <textarea placeholder="Ingredientes"></textarea>
          <textarea placeholder="Modo de preparo"></textarea>
          <button className='btn'>Criar nova Receita</button>
        </span>
      </p>
      
    </div>
  );
}