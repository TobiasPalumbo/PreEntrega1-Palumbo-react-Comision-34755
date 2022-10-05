import React,{ useState, useEffect } from 'react';
import "../styles/Home.css";
import { fetchData } from './utils/functions';
import Card from './Layout/Card/Card';
const HomeProducts = () => {

  const [card, setCard] = useState([]);
  useEffect(()=>{

    fetchData("./json/stock.json").then( data => 
      data.map(producto =>{
      let a = <Card
      key= { producto.id }
      class = {`cardContainer-${producto.id}`}
      classCard = {`card-${producto.id}`}
      idLink = {producto.id }
      logo = {producto.logo}
      imagen= { producto.imagen } 
      marca= { producto.marca }
      modelo = { producto.modelo }
      precio = { producto.precio }
      cantidad = { producto.cantidad } />
      return a  
      
  }))
  .then(datos => setCard(datos))
  
  },[]);

  return ( 
    <>
      { card }
    </>
  );
}

export default HomeProducts;
