import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";

const Form = () => {
  const location = useLocation();
  const propertySlug = location.pathname.split("/")[1];

  const [formData, setFormData] = useState({
    email: "",
    name: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!propertySlug) {
      toast.error("Property slug is missing!");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        `https://backend-lead.onrender.com/api/lead/${propertySlug}`,
        formData,
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.status === 201) {
        toast.success("Lead created successfully!");
        setFormData({ email: "", name: "", phone: "" }); // Reset form
      } else {
        toast.error("Unexpected response from the server.");
      }
    } catch (error) {
      toast.error("Failed to create lead. Please try again!");
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full flex flex-col items-center mt-20">
      <div>
        <a href="/getall" className="bg-green-300 p-2 rounded-md">
          Get All Leads
        </a>
      </div>
      <form className="w-[400px] flex flex-col gap-5 bg-gray-100 p-10 rounded-md" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label>Name*</label>
          <input
            className="border"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInput}
            required
          />
        </div>
        <div className="flex flex-col">
          <label>Email*</label>
          <input
            className="border"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInput}
            required
          />
        </div>
        <div className="flex flex-col">
          <label>Phone</label>
          <input
            className="border"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInput}
          />
        </div>
        <button
          className="bg-green-300 h-[40px] rounded-md"
          type="submit"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Form;
