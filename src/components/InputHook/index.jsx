import React from 'react';
import { useForm } from 'react-hook-form';

export  function InputHook({id ,type = "text", name = "name", required = false,...rest}) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    console.log(data);
  };  console.log(errors);
  
  return (
      <label htmlFor={id}>{name}
      <input type={type} id={id}  {...register(`${name}`, {required: {required}, maxLength: 80})} {...rest}/>
      </label>

  );
}