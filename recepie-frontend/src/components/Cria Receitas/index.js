import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";

export default function Home(props) {

  const [titulo, setTitulo] = useState("")
  const [ingredientes, setIngredientes] = useState("")
  const [modoDePreparo, setModoDePreparo] = useState("")
  const history = useNavigate()

  function addRecepy(event){
    event.preventDefault();
    axios.post('http://localhost:8000/api/receitas/', {'title':titulo, 'ingredients':ingredientes, 'preparo':modoDePreparo}).then(() => history("/MinhasReceitas"))
    
  }

  function mudaTitulo(event){
    setTitulo(event.target.value);
  }

  function mudaIngredientes(event){
    setIngredientes(event.target.value);
  }

  function mudaPreparo(event){
    setModoDePreparo(event.target.value);
  }


  return (
    <div className = 'CriaReceitasContainer'>
      <p>
        <span className="input">
          <input 
          className="CriaTitulo"
          placeholder="Nome da receita"
          type="text"
          value={titulo}
          onChange={mudaTitulo}

          />

          <textarea
          className="CriaIngredientes"
          placeholder="Ingredientes"
          type="text"
          value={ingredientes}
          onChange={mudaIngredientes}
          
          />

          <textarea
          className="CriaPreparo"
          placeholder="Modo de preparo"
          type="text"
          value={modoDePreparo}
          onChange={mudaPreparo}
          
          />
          <button onClick={addRecepy} className='btn'>Criar nova Receita</button>
        </span>
      </p>
      
    </div>
  );
}