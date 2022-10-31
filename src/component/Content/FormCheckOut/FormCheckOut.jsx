import React, { useContext } from 'react';
import { AddToCartContext } from '../../../Context/addToCartProvider';
import useForm from '../../../Hooks/useForm';
import { crearOrdenDeCompra, getOrdenDeCompra, getProductById, updateProducto } from '../../../utils/firebase';
import "./FormCheckOut.css"
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { TalleContex } from '../../../Context/TalleProvider';


const FormCheckOut = () => { 
  const {talle, setTalle} = useContext(TalleContex)

  const navigate = useNavigate()
  let initialForm = {
    name: "",
    lastName: "",
    email: "",
    dni: "",
    addres: "",
  }
  const validateForm = (form) => {
    let error = {}
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexID = /^[0-9]+$/
    if(!form.name.trim()){
      error.name = "Name is required!" 
    }else if(!regexName.test(form.name.trim())){
      error.name = "Name solo letras"
    }
    if(!form.lastName.trim()){
      error.lastName = "Last Name is required!" 
    }else if(!regexName.test(form.lastName.trim())){
      error.lastName = "Last Name solo letras"
    }
    if(!form.email.trim()){
      error.email = "Email is required!" 
    }else if(!regexName.test(form.name.trim())){
      error.email = "Emial is "
    }
    if(!form.dni.trim()){
      error.dni = "ID is required!" 
    }else if(!regexID.test(form.dni.trim())){
      error.dni = "ID can only be numbers "
    }
    if(!form.addres.trim()){
      error.addres = "Addres is required!" 
    }

    return error
  }
  
  const {total, emptyCart, cart} = useContext(AddToCartContext);

  const datosForm = React.useRef()

  const { 
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
  } = useForm(initialForm, validateForm)

  const sendForm = (e) => {
    e.preventDefault()
    let cartAux = []
    const cartAux2 = []
    validateForm(initialForm)
    if(form.name !== "" ){
      if(Object.keys(errors).length === 0){
        const data = new FormData(datosForm.current)
        const finalData = Object.fromEntries(data)
        const {name, lastName, email, dni, addres} = finalData
        crearOrdenDeCompra(name, lastName, email, dni, addres, total)
         .then(item =>{
          let index =   cart.map(productos =>{
            console.log(productos.producto[0])
            let indexProducto =  cartAux.findIndex(productoId => productoId === productos.producto[0])
            console.log("aaaaa",indexProducto)
            if(indexProducto  === -1 ){
              console.log("productos en carrito;",productos)
              cartAux.push(productos.producto[0])   
              console.log("IdProducto", cartAux)
              console.log(indexProducto)
            }
              let indexProducto2 =  cartAux.findIndex(productoId => productoId === productos.producto[0]) 
              return indexProducto2
            }) 
              console.log("carrito Aux:", index) 
              console.log("IDs",cartAux)           
              for(let i in cartAux){
                 getProductById(cartAux[i])
                 .then(prod =>{
                  cart.map(productos => {
                  cartAux2.push(prod)
                  let indexTalle = prod[1].talle.findIndex(el => el.size === productos.talle.talle)
                  console.log("talles index:", indexTalle)
                  if(prod[1].talle[indexTalle].size === productos.talle.talle && prod[0] === productos.producto[0]){
                    console.log("son igaules:",prod[1].talle[indexTalle].size === productos.talle.talle)
                    console.log("productos carrito:" , productos)
                    console.log("producto antes:",prod[1].talle[indexTalle])
                    prod[1].talle[indexTalle].stock -= productos.cant
                    console.log("producto mandado", prod[1])
                    updateProducto(cartAux[i], prod[1])
                    console.log("producto dsp:",prod[1].talle[indexTalle] )
                    console.log("producto entero dsp:",prod[1].talle)
                  }
                  })
                }          
          ) 
          }         
           Swal.fire({
            icon: 'success',
            title: `Your purchase has been completed ID:${item.id}`,
           })
           navigate("/")
         }).then(emptyCart(cart)).then(setTalle({}))
        }
    }else if(form.name === "" || form.lastName === "" || form.dni === "" || form.addres === "" ){
      Swal.fire({
        icon: "error",
        title: "Invalid data input, fill the inputs"
      })
    }
   
  }
  return (
    <section className='section-formCheck'>
      <div className='form-check'>
        <form onSubmit={sendForm} ref = {datosForm}>
          <label htmlFor="name">Name</label>
          <input 
          className={errors.name?"input-error":null} 
          type="text" 
          name='name' 
          value={form.name}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder='Jane' />
          {errors.name?<span className='warning-text'>{errors.name}</span>:null}
          <label htmlFor="lastName">Last Name</label>
          <input
          type="text" 
          className={errors.lastName?"input-error":null} 
          name='lastName' value={form.lastName}  
          onChange={handleChange} 
          onBlur={handleBlur}  
          placeholder='Doe' />
          {errors.lastName?<span className='warning-text'>{errors.lastName}</span>:null}
          <label htmlFor="email">Email</label>
          <input 
          type="text" 
          className={errors.email?"input-error":null} 
          name='email' value={form.email}  
          onChange={handleChange} 
          onBlur={handleBlur}  
          placeholder='jane@example.com' />
          {errors.email?<span className='warning-text'>{errors.email}</span>:null}
          <label htmlFor="dni">ID</label>
          <input 
          type="number" 
          className={errors.dni?"input-error":null} 
          name='dni' 
          value={form.dni}  
          onChange={handleChange} 
          onBlur={handleBlur}  
          placeholder='44444444' />
          {errors.dni?<span className='warning-text'>{errors.dni}</span>:null}
          <label htmlFor="addres">Addres</label>
          <input 
          type="text" 
          className={errors.addres?"input-error":null} 
          name='addres' value={form.addres}  
          onChange={handleChange} 
          onBlur={handleBlur}  
          placeholder='76-20 34th Ave' />
          {errors.addres?<span className='warning-text'>{errors.addres}</span>:null}
          <button type='submit' className='btn-submit'>Submit</button>
        </form>
      </div>
    </section>
  );
}

export default FormCheckOut;

// cart.map(prod =>{
//   let prodId = prod.producto[0]
//   let indexId = cartAux.findIndex(producId => producId === prodId)
//   if(indexId === -1){
//      cartAux.push(prodId)
//   }
//   getProductById(cartAux[0])
//   .then(el =>{
//       let indexTalle = el[1].talle.findIndex(el => el.size === prod.talle.talle)
//       console.log(cart)
//       console.log(prod)
//       console.log(indexTalle)
//       console.log(el)
//       console.log(prod.talle.talle)
//       console.log(el[1].talle[indexTalle].size)
//     if(el[1].talle[indexTalle].size === prod.talle.talle){
//         let newStock = el[1].talle[indexTalle].stock -= prod.cant
//         console.log(newStock)
//         cartAux2.push(newStock)
//         return  cartAux2
//     }
//   })
  
//   // updateProducto(prodId, el[1])
// }) 