import React from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./index.css";

export default function ReceitaCompleta(props) {
    const [receitas, setReceitas] = useState([])
    const params = useParams()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/receita/${params.receita_id}`).then((res) => setReceitas(res.data));
    }, [])

    console.log(params)

  return (
      <div>
          <p>Nome da Receita: {receitas.title}</p>
          <p>Ingredientes: {receitas.ingredients}</p>
          <p> Modo de preparo: {receitas.preparo}</p>
      </div>
      
  );
}