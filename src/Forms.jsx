import React from 'react';
import { useForm } from 'react-hook-form';
import "./forms.css"

export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Name" {...register("Name", {required: true, maxLength: 80})} />
      <p className='error'>{errors.Name && "this field is required"}</p>
      <input type="text" placeholder="Last name" {...register("Last name", {required: true, maxLength: 100})} />
      <p className='error'>{errors.text && "this field is required"}</p>
      <input type="password" placeholder="password" {...register("password", {required: true, max: 12, min: 5, maxLength: 12, pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/i})} />
      <p className='error'>{errors.password && "your password must contains Maj and Symbole"}</p>

      <input type="submit" />
    </form>
  );
}