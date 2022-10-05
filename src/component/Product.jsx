import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Talles from './Content/Talles';
import CardData from './Layout/CardData/CardData';

const Product = () => {
    const [producto, setproducto] = useState([]);
   
    const {id} = useParams()
    useEffect(() => {
      async function fetchProducto (){
        const resolve = await fetch("../json/stock.json") 
        const productoData = await resolve.json()
        const productoFind = productoData.find(product => product.id  === parseInt(id))
        console.log(productoFind)
        setproducto(productoFind)
      }
     fetchProducto()
    }, []);
    return(
        <>
        <CardData
        img={`.${producto.imagen}`} 
        title ={producto.modelo}
        price ={`$${producto.precio}`}
        marca ={producto.marca}
        cantidad = {producto.cantidad}
        />
        </>
    )
}

export default Product;
