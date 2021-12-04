import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";
import Receita from '../Receita'

export default function MinhasReceitas(props) {

    const [receitas, setReceitas] = useState([])
    const history = useNavigate()

    const receitaRodrigo = {
      "title": "Brownie do Rodrigo",
      "ingredients": "- Chocolate meio amargo (300g)\n- manteiga sem sal (150g)\n- ovos (4 unidades)\n- Farinha (100g)\n- açucar (170g)",
      "preparo": "Comece fazendo Banho Maria com o chocolate,  e quando derreter, adicione a manteiga.\n\nEm um outro bowl, coloque os ovos, o açucar e a farinha.\n\nJunte o chocolate e a manteiga no outro bowl, mas aos poucos para os ovos não cozinharem\n\nUnte um tabuleiro, e coloque a mistura.\n\nForno preaquecido à 180º uns 15 minutos\n\nRetire, e aproveite :)"
      }

    function addSpecialRecepy(event){
      event.preventDefault();
      axios.post('http://localhost:8000/api/receitas/', receitaRodrigo).then(() => window.location.reload(false))
    }

    useEffect(() => {
        axios.get("http://localhost:8000/api/receitas/").then((res) => setReceitas(res.data));
    }, [])

    

    return (
    <div className="MinhasReceitasContainer">
      <div className='buttonContainer'>
          <Link className='Link2CriaReceitas' to="/CriaReceitas">
          <button className='btn'>Criar Nova Receita</button>
          </Link>
          <button onClick={addSpecialRecepy} className='receitaExtra'>Receita Rodrigo :)</button>
      </div>


        <div className="MinhasReceitas">
        
        {receitas.map((receita) => (
        
        <Receita key={`receita__${receita.id}`} id={receita.id} title={receita.title} ingredients={receita.ingredients}/>
      ))}

        <p className="espacoMinhasReceitas"> ... </p>

        </div>
    </div>
    );
  }