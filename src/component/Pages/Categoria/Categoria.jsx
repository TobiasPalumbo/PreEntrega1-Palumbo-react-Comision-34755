import React,{ useEffect,useState } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { fetchData } from '../../../utils/functions';
import Card from '../../Layout/Card/Card';
import Aside from "../../Content/Aside/Aside"
import "../Shop/Shop.css"
import { getProductos } from '../../../utils/firebase';
const Categoria = () => {
  const [categoria, setcategoria] = useState([]);
  const {marca} = useParams()
  console.log(marca)
  useEffect(() => {
    getProductos().then(data =>{
      const productoFiltrado = data.filter(producto => producto[1].marca === marca)
      console.log(productoFiltrado)
      const productoMap = productoFiltrado.map(productos =>{
        console.log(productos)
        let a = <Card 
        key ={productos[0]}
        imagen = {`${productos[1].imagen}`}
        logo = {`${productos[1].logo}`}
        modelo = {productos[1].modelo}
        marca = {productos[1].marca}
        precio = {productos[1].precio}
        cantidad = {productos[1].cantidad}
        idLink = {productos[0]} />
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
