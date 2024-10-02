import React from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "../../components/button/header/header";







function Home() {
 const produtos = [
   {nome: 'Batedeira', id: 20},
   {nome: 'Ventilador', id: 22},
   {nome: 'Computador', id: 30},
 ]

   const location = useLocation();

   console.log(location)
 
   return (
    <div>
      <Header nome='Paulo' age={22} active={true}/>
         {produtos.map((produto, index) => (
          <Link key={index} to={`detalhes/${produto.id}`}>
          <span style={{display: 'block'}}>{produto.nome}</span>
          </Link>
         
         ))}
      
      
        
       
    </div>
   )
}

export default Home;
