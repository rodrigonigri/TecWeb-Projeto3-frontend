import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

export default function Home(props) {
  return (
    <div className = 'homeContainer'>
      <Link to = "/MinhasReceitas">
        <button className = 'btnHome'> 
          Minhas Receitas
        </button>
      </Link>
      
      </div>
  );
}