import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import Receita from '../Receita'

export default function MinhasReceitas(props) {

    const [receitas, setReceitas] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/receitas/").then((res) => setReceitas(res.data));
    }, [])

    

    return (
    <div className="MinhasReceitasContainer">
        <Link className='Link2CriaReceitas' to="/CriaReceitas">
        <button className='btn'>Criar Nova Receita</button>
        </Link>


        <div className="MinhasReceitas">
        
        {receitas.map((receita) => (
        
        <Receita key={`receita__${receita.id}`} id={receita.id} title={receita.title} ingredients={receita.ingredients}/>
      ))}
      

        </div>
    </div>
    );
  }