import React,{useEffect, useState} from 'react';
import "./Aside.css"
import { Link } from 'react-router-dom';
import { fetchData } from '../../../utils/functions';
import { getProductos } from '../../../utils/firebase';
const Aside = () => {
  const [category, setcategory] = useState([]);
  useEffect(() => {
    getProductos().then(data =>{
      let data2 = []
      let data3 = []
      data.forEach(el => {
        if(!data3.includes(el[1].marca)){
          data2.push(el)
          data3.push(el[1].marca)
        }
      })
      console.log(data2)
      const categorys = data2.map((cat,index) =>{
           let a = <li key={index} className='list-items'><Link to={`/categorias/${cat[1].marca}`}>{cat[1].marca} <span className='cantidad-categoria'>({cat[1].cantidad})</span></Link></li>
           return a
      })
      setcategory(categorys)
    })
  }, []);
  return (
    <>
    <aside>
        <div className='category-wrapper'>
          <div className='categorys'>
            <h1>Categories</h1>
             <ul className='list-category'>
                {category}
             </ul>
          </div>
        </div>
    </aside>   
    </>
  );
}

export default Aside;
