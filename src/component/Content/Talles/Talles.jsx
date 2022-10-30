import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Box from '../../Layout/Box/Box';
import { AddToCartContext } from '../../../Context/addToCartProvider';
import { getProductById } from '../../../utils/firebase';
import { TalleContex } from '../../../Context/TalleProvider';
const Talles = () => {
  const [talles, setTalles ] = useState([])
  const {cart} = useContext(AddToCartContext); 
  const {talleSelect, talle, setTalle} = useContext(TalleContex)
  const {id} = useParams()

  // setTalle({})
  useEffect(() => {
    getProductById(id).then(productoData =>{
      const tallesMap = productoData[1].talle.map(talles => {
         const {size, stock} = talles;
         const mapBox = <Box 
         key = {size} 
         input = {size} 
         click = {()=> setTalle({id:productoData[0], talle:size, stock:stock})} 
         class = {`box-sm-hover ${talle.talle === size && talle.id === productoData[0]  ? "talle-select":""}`} 
         />
         return mapBox
      })
        setTalles(tallesMap)
    })
  }, [talle]);

  return (
    <>
     {talles}
    </>
  );
}

export default Talles;
