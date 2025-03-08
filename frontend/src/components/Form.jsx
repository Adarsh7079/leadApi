import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify'; // Import toast from react-toastify
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for toasts

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

    SetFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `http://localhost:8000/api/lead/${propertySlug}`,
        formData,
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.status === 201) {
        toast.success("Lead created successfully!"); // Success toast
        SetFormData({ email: "", name: "", phone: "" }); // Clear form data after success
      } else {
        toast.error("Unexpected response from the server."); // Failure toast
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error submitting the form. Please try again."); // Error toast
    }
  };

  return (
    <div>
      {/* Toast Container to show notifications */}
      <ToastContainer />
      
      <div className='w-full flex flex-col items-center mt-20 justify-between bg-emerald-='>
        <div>
          <a href="/getall" className='bg-green-300 h-[40pc] p-2 rounded-md'>Get All Leads</a>
        </div>
        <form
          className='w-[400px] flex flex-col gap-5 bg-gray-100 p-10 rounded-md'
          onSubmit={handleSubmit}
        >
          <div className='flex flex-col'>
            <label htmlFor="name">Name*</label>
            <input
              className='border-1'
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInput}
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="email">Email*</label>
            <input
              className='border-1'
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInput}
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="phone">Phone</label>
            <input
              className='border-1'
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInput}
            />
          </div>
          <button className='bg-green-300 h-[40px] rounded-md'>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
