import React, { useEffect,useState } from 'react';
import HomeProducts from "../../Content/HomeProducts/HomeProducts";
import Card from "../../Layout/Card/Card"
import Aside from '../../Content/Aside/Aside';
import "./Shop.css";
import { getProductos } from '../../../utils/firebase';
const Shop = () => {
  const [productos, setproductos] = useState([]);
  useEffect(() => {
     getProductos().then(data => {
       const productoMap =  data.map(datos =>{
        let a = <Card 
        key ={datos[0]}
        producto = {datos}
        imagen = {datos[1].imagen}
        logo = {datos[1].logo}
        class = {`cardShop-${datos.id}`}
        modelo = {datos[1].modelo}
        marca = {datos[1].marca}
        precio = {datos[1].precio}
        cantidad = {datos[1].cantidad}
        idLink = {datos[0]} />
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
