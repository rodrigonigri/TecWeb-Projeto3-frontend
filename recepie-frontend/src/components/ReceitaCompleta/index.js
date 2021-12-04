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

        <div class="content-main">
            <div class="content-box">
                <h2 className="Nome">Nome da Receita: {receitas.title}</h2>
                <p className="Nome" id="ingr"> Ingredientes:</p>
                {receitas.ingredients ? receitas.ingredients.slice(1).split("\n-").map((receita)=> (
                    <li className="Ingredientes">
                        {receita}
                    </li>
                )) : null}
                <p className="prep">Modo de Preparo: </p>
                <p className="Preparo">{receitas.preparo}</p>
                <p className="espaco"> ... </p>
            </div>
        </div>

      </div>

      
      
  );
}