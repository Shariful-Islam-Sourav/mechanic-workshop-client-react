import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import './AddService.css'

const AddService = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axios.post('http://localhost:5000/services',data)
    .then(res => {
        if(res.data.insertedId){
            alert("Service Added Successfully");
            reset();
        };      
    })
  };
  return (
    <div>
      <h2>Add your service</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="Name" type="text" {...register("name")} />
      <textarea placeholder="Product Details Goes here..." {...register("desc")}/>
      <input placeholder="Product Price" type="number" {...register("price")}/>
      <input placeholder="Image Link" type="text" {...register("img")}/>
      <input type="submit" />
    </form>
    </div>
  );
};

export default AddService;
