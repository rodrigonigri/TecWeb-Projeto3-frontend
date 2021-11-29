import './App.css';
import {Route, Routes} from 'react-router-dom'
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./components/Home"
import MinhasReceitas from "./components/MinhasReceitas"
import CriaReceitas from "./components/Cria Receitas"
import ReceitaCompleta from "./components/ReceitaCompleta"

function App() {
  return (
    <div className="App">
       <Header className="AppHeader"/>

       <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/MinhasReceitas" element = {<MinhasReceitas />} />
        <Route path = "/CriaReceitas" element = {<CriaReceitas />} />
        <Route path = "/receita/:receita_id" element = {<ReceitaCompleta />} />
      </Routes>

      <Footer className="AppFooter"/>
    </div>
  );
}

export default App;
