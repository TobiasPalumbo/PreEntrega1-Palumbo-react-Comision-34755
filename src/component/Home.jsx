import React,{useState, useEffect} from 'react';
import "../styles/Home.css"
const Home = () => {

  const [dolar, setdolar] = useState({});
  useEffect(()=>{
    async function fetchData () {
      const response = await fetch("./json/stock.json")
      console.log(response)
  } 
  fetchData()
  }, []);
 


  return ( 
    <div>

    </div>
  );
}

export default Home;
