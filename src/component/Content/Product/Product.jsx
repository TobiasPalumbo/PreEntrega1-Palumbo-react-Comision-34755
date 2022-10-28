import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Talles from '../Talles/Talles';
import CardData from '../../Layout/CardData/CardData';
import { getProductById } from '../../../utils/firebase';
const Product = () => {
  const [producto, setproducto] = useState([]);
  const {id} = useParams()
  console.log(id)
  useEffect(() => {
    getProductById(id)
    .then(produc =>{
      setproducto(produc) 
      })
  }, [id]); 
  if(producto.length!==0){
        return(
      <>
      <CardData
      img = {producto[1].imagen} 
      title = {producto[1].modelo}
      price = {`${producto[1].precio}`}
      marca = {producto[1].marca}
      cantidad = {producto[1].cantidad}
      producto = {producto} />
      </>
  )
  }   
}

export default Product;

