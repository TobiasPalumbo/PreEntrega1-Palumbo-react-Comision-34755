import React from 'react';
import "./Form.css"
const Form = () => {
  return (
    
    <div>
      <section>
      <div className='form-wrapper'>
      <h3>Get in touch</h3>
      <p>How can we help?</p>
      <form className='form-contact'>
        <label></label>
        <input type="text" />
        <label htmlFor=""></label>
        <input type="text" />
        <label htmlFor=""></label>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <button type="submit" className='btn-submit'>Submit</button>
      </form>
    </div>
    </section>
    </div>    
  );
}

export default Form;
