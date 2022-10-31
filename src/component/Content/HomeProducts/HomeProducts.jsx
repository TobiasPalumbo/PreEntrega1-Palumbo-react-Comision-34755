import React,{ useState, useEffect } from 'react';
import "./Home.css";
import { fetchData } from '../../../utils/functions';
import { getProductos } from '../../../utils/firebase';
import Card from '../../Layout/Card/Card';
const HomeProducts = () => {

  const [card, setCard] = useState([]);
  useEffect(()=>{
      getProductos().then(data => 
      data.map(producto =>{
      let a = <Card
      key= { producto[0] }
      idLink = { producto[0] }
      class = { `cardContainer-${producto[1].id}` }
      classCard = { `card-${producto[1].id}` }
      logo = { producto[1].logo }
      imagen= { producto[1].imagen } 
      marca= { producto[1].marca }
      modelo = { producto[1].modelo }
      precio = { producto[1].precio }
      cantidad = { producto[1].cantidad }
      producto = { producto } />
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
