import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";

export default function Receita(props) {
    const [receita, setReceita] = useState([])

    function chamaDelete(){
        axios.delete(`http://localhost:8000/api/receita/${props.id}`)
        window.location.reload(false);
    }


    return (
    <div className="Receita">
        <div className='ReceitaHeader'>
        <button className="btn2" id='edit'>&#128221;</button>
        <button onClick={chamaDelete} className="btn2" id='delete'>&#10060;</button>
        </div>

        <Link to={`/receita/${props.id}`}>
        <div className="ReceitaContent">
        <p className="Titulo">Título: {props.title}</p>
        <p className="Ingredientes"> Ingredientes: {props.ingredients}</p>
        </div>
        </Link>

        
    </div>
    );
  }
