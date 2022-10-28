import React, { useState } from 'react';

const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    setForm(
      {
        ...form,
         [e.target.name]:e.target.value
      }
    )
  }

  const handleBlur = (e) => {
    handleChange(e)
    setErrors(validateForm(form))
  }



  return (
    {
      form,
      errors,
      loading,
      response,
      handleChange,
      handleBlur,
    }
  );
}

export default useForm;
