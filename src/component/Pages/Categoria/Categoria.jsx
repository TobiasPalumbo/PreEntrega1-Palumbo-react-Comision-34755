import React,{ useEffect,useState } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { fetchData } from '../../utils/functions';
import Card from '../../Layout/Card/Card';
import Aside from "../../Content/Aside/Aside"
import "../Shop/Shop.css"
const Categoria = () => {
  const [categoria, setcategoria] = useState([]);
  const {marca} = useParams()
  console.log(marca)
  useEffect(() => {
    fetchData("../json/stock.json").then(data =>{
      console.log(data[0].marca)
      const productoFiltrado = data.filter(producto => producto.marca === marca)
      console.log(productoFiltrado)
      const productoMap = productoFiltrado.map(productos =>{
        let a = <Card 
        key ={productos.id}
        imagen = {`../${productos.imagen}`}
        logo = {`../${productos.logo}`}
        modelo = {productos.modelo}
        marca = {productos.marca}
        precio = {productos.precio}
        cantidad = {productos.cantidad}
        idLink = {productos.id} />
        return a
      })
      setcategoria(productoMap)
    })
  }, [marca]);
  return (
    <> 
    <section>
      <div className="wrapper-shop">
        <div className='wrapper-shop-productos'>
          {categoria}
        </div>
        <Aside />
      </div>
    </section>
    </>
  );
}

export default Categoria;
