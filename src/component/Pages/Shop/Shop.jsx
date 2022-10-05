import React, { useEffect,useState } from 'react';
import { fetchData } from "../../utils/functions";
import Card from "../../Layout/Card/Card"
import Aside from '../../Content/Aside/Aside';
import "./Shop.css";
const Shop = () => {
  const [productos, setproductos] = useState([]);
  useEffect(() => {
     fetchData("./json/stock.json").then(data => {
       const productoMap =  data.map(datos =>{
        let a = <Card 
        key ={datos.id}
        imagen = {datos.imagen}
        logo = {datos.logo}
        class = {`cardShop-${datos.id}`}
        modelo = {datos.modelo}
        marca = {datos.marca}
        precio = {datos.precio}
        cantidad = {datos.cantidad}
        idLink = {datos.id} />
        return a
     })
    setproductos(productoMap)})
  }, []);

  return (
    <section>
      <div className="wrapper-shop">
        <div className='wrapper-shop-productos'>
        {productos}
        </div>
        <Aside />
      </div>
    </section>
  );
}

export default Shop;
