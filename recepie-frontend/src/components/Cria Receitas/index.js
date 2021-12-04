import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";

export default function CriaReceitas(props) {

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
          placeholder={`-Primeiro Ingrediente (quantidade)${"\n"}-Segundo Ingrediente (quantidade)${"\n"}-...`}
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
          <div>
          <button onClick={addRecepy} className='btn'>Criar nova Receita</button>
          
          </div>
        </span>

      
    </div>
  );
}