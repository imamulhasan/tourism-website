import React from 'react';
import './AddTravel.css'
import { useForm } from "react-hook-form";


const AddTravel = () => {
    const { register, handleSubmit, reset} = useForm();
    const onSubmit = data => { 
       const procced = window.confirm('You want to set a Travel?')
       if(procced){
        fetch('https://salty-cove-06755.herokuapp.com/travels',{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                reset()
            }
        })
       }
    };
    return (
        <div className="text-center"  style={{height:"75vh" ,backgroundColor:'#DAEBE8'}}>
            <form onSubmit={handleSubmit(onSubmit)}>
            <h2 style={{color:'#25b04b', paddingTop:'100px'}}>Add a travel</h2>
            <input  className="input-field"  {...register("name",{ required: true })} placeholder="name" /> <br />
            <input type="number"  className="input-field"  {...register("offerPrice",{ required: true })} placeholder="Offer Price" /> <br />
            <textarea  className="input-textarea"  {...register("dercription",{ required: true })} placeholder="Description" /> <br />
            <input  className="input-field"  {...register("image", { required: true })} placeholder="image url" /> <br />
            <input  className="input-button" type="submit" />
            </form>
        </div>
    );
};

export default AddTravel;