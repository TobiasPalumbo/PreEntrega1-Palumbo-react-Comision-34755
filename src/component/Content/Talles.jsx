import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Box from '../Layout/Box/Box';
import { fetchData } from '../utils/functions';
const Talles = () => {
  const [talles, setTalles ] = useState([])
  const {id} = useParams()
  useEffect(() => {
    fetchData("../json/stock.json").then(productoData =>{
      const productoFind = productoData.find(product => product.id  === parseInt(id))
      const talles = productoFind.talle
      const tallesMap = talles.map(size => <Box key={size} input = {size} />)
      setTalles(tallesMap)
      console.log(talles)
    })
  }, []);

  return (
    <>
     {talles}
    </>
  );
}

export default Talles;
