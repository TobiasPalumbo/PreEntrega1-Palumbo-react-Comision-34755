import React, { useState, createContext } from 'react';
import Swal from "sweetalert2"

const AddToCartContext = createContext()
const AddToCartProvider = (props) => {

  const [cart, setCart] = useState([]);
  const [totalDeProductos, settotalDeProductos] = useState(0);
  const addToCart = (producto, cantidad, talle) =>{
    console.log(producto)
    if(cantidad >= 1 ){
      if(talle.id === producto[0]){
        const cartAux = cart 
        console.log(talle)
        let index = cartAux.findIndex(data => data.talle.id === talle.id && data.talle.talle === talle.talle)
        cartAux.forEach(el => console.log(el.talle))
        console.log(index)
        if(index === -1){
          let prod = {producto, cant:cantidad, talle:talle}
          cartAux.push(prod)
        }else{  
          cartAux[index].cant = cantidad 
          cartAux[index].talle = talle
        }
        let totalCart = cart.reduce((acc, prod) => acc +  prod.cant, 0)
        settotalDeProductos(totalCart)
        setCart(cartAux)
      }else{
        Swal.fire({
          text:"You have to choose a size to advance!",
          icon: 'error'
        })
      }
    }else{
      Swal.fire({
        text:"Out of stock!",
        icon: 'error'
      })
    }
  }

  const deleteToCart = (product) => {
    console.log(product.talle)
    const cartAux = cart
    let index = cartAux.findIndex(prod=>prod.talle === product.talle)
    cartAux.splice(index,1)
    let cartTotal = cart.reduce((acc, prod) => acc + prod.cant, 0)
    settotalDeProductos(cartTotal)
    setCart(structuredClone(cartAux))
  }
  const emptyCart = (cart) => {
    const cartAux = []
    settotalDeProductos(0)
    setCart(cartAux)
    
  }
  const total = cart.reduce((acc, prod) => acc + prod.producto[1].precio * prod.cant, 0 ) 
  
  return (
    <AddToCartContext.Provider value={{addToCart, cart, deleteToCart, setCart, emptyCart, totalDeProductos, settotalDeProductos , total}}>
      {props.children}
    </AddToCartContext.Provider>
  );
}

export {AddToCartProvider, AddToCartContext};
