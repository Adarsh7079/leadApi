import React, { useState } from 'react'
import axios from 'axios';
const Form = () => {
  const propertySlug = location.pathname.split("/")[1]; 
  const [formData, SetFormData] = useState({
    email: "",
    name: "",
    phone: "",
  });
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    SetFormData((e) => {
      return { ...e, [name]: value };
    });
    
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `http://localhost:8000/api/lead/${propertySlug}`, // Use the dynamic propertySlug
        formData,
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.status === 201) {
        console.log("Lead created successfully!");
      } else {
        console.log("Unexpected response:", response);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div>
      <div className=' w-full flex flex-col items-center mt-20 justify-between bg-emerald-='>
       <div>
         <a href="/getall" className=' bg-green-300 h-[40pc] p-2 rounded-md '>Get All Leads</a>
       </div>
        <form action="" className=' w-[400px] flex flex-col gap-5 bg-gray-100 p-10 rounded-md' onSubmit={handleSubmit}>
          <div className=' flex flex-col'>
            <label htmlFor="">Name*</label>
            <input  
            className=' border-1'
            type="name"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInput}
             />
          </div>
          <div className=' flex flex-col'>
            <label htmlFor="">mail*</label>
            <input 
             className=' border-1' 
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInput}/>
          </div>
          <div className=' flex flex-col'>
            <label htmlFor="">Phone</label>
            <input 
            className=' border-1'
            type="phone"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInput}/>
          </div>
          <button  className=' bg-green-300 h-[40px] rounded-md'>Button</button>
        </form>
      </div>
    </div>
  )
}

export default Form
