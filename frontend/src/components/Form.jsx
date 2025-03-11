import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-hot-toast";

const EnquiryForm = () => {
  const location = useLocation();
  const propertySlug = location.pathname.split("/")[1];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!propertySlug) {
      toast.error("Property slug is missing!");
      return;
    }

    setLoading(true);
    setError(null);

    const api_url = `https://backend-lead.onrender.com/api/lead/${propertySlug}`;
    const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
    };

    try {
      const response = await fetch(api_url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setFormData({ name: "", email: "", phone: "" });

        toast.success(
          <div className="flex flex-col">
            <h3 className="font-semibold text-lg">Thank You For Your Interest!</h3>
            <p className="text-sm">Your enquiry has been successfully submitted.</p>
          </div>,
          {
            duration: 3000,
            position: "top-center",
            style: {
              borderRadius: "10px",
              background: "#ffffff",
              padding: "12px",
              color: "#333",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              minWidth: "30%",
              maxWidth: "350px",
              textAlign: "center",
            },
          }
        );
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || "Submission failed.");
      }
    } catch (err) {
      setError(err.message);
      toast.error("Something went wrong! Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <h3 className="text-black text-2xl text-start mb-6 font-bold">
        Connect With Us
      </h3>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <input
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInput}
            placeholder="Name*"
            required
          />
        </div>
        <div className="flex flex-col">
          <input
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInput}
            placeholder="Email*"
            required
          />
        </div>
        <div className="flex flex-col">
          <input
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInput}
            placeholder="Phone*"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition w-full"
          disabled={loading}
        >
          {loading ? "Submitting..." : "SUBMIT"}
        </button>

        {error && <p className="text-red-500 text-sm text-center mt-4">{error}</p>}
      </form>
    </div>
  );
};

export default EnquiryForm;
