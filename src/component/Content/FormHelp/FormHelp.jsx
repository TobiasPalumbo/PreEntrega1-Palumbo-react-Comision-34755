import React from 'react';
import useForm from '../../../Hooks/useForm';
import { crearConsulta } from '../../../utils/firebase';
import "./Form.css"

const Form = () => {

  let initialForm = {
    nombre: "",
    email: "",
    mensaje: "",
  }
  const validateForm = (form) => {
    let error = {}
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexID = /^[0-9]+$/
    if(!form.nombre.trim()){
      error.nombre = "Name is required!" 
    }else if(!regexName.test(form.nombre.trim())){
      error.nombre = "Name solo letras"
    }
    if(!form.email.trim()){
      error.email = "Email is required!" 
    }else if(!regexEmail.test(form.email.trim())){
      error.email = "Is require jane@example.com"
    }
    if(!form.mensaje.trim()){
      error.mensaje = "Menssage is required!" 
    }
    return error
  }

  const {
    form,
    errors,
    handleChange,
    handleBlur,
  } = useForm(initialForm, validateForm)

  const datosFormulario = React.useRef()

  const submiteHelp = (e) =>{
    e.preventDefault()
    validateForm(initialForm)
    if(form.nombre !== "" ){
      if(Object.keys(errors).length === 0){
      const data = new FormData(datosFormulario.current)
      const finalData = Object.fromEntries(data)
      const {nombre, email, mensaje} = finalData
      crearConsulta(nombre, email, mensaje)
    }
    }
  }

  return (
    <div>
      <h1 className='title-contactUs'>Contact Us</h1>
      <section>
      <div className='form-wrapper'>
      <h3>Get in touch</h3>
      <p>How can we help?</p>
      <form className='form-contact'  ref={datosFormulario} onSubmit={submiteHelp}>
        <label htmlFor='nombre'>Name</label>
        <input type="text" name='nombre' className={errors.nombre?"input-error":null}  value={form.nombre}  onChange={handleChange}
          onBlur={handleBlur} placeholder='Jane'/>
          {errors.nombre?<span className='warning-text'>{errors.nombre}</span>:null}
        <label htmlFor="email">Email</label>
        <input type="text" name='email' className={errors.nombre?"input-error":null}  value={form.email}  onChange={handleChange}
          onBlur={handleBlur} placeholder='jane@example.com'/>
          {errors.email?<span className='warning-text'>{errors.email}</span>:null}
        <label htmlFor="mensaje">Menssage</label>
        <textarea name="mensaje" className={errors.nombre?"input-error":null}  cols="30" rows="10" value={form.mensaje}  onChange={handleChange}
          onBlur={handleBlur} placeholder='Mensagge...'></textarea>
          {errors.mensaje?<span className='warning-text'>{errors.mensaje}</span>:null}
        <button type="submit" className='btn-submit'>Submit</button>
      </form>
    </div>
    </section>
    </div>    
  );
}

export default Form;
