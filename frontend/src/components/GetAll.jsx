import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const GetAll = () => {
  const [leads, setLeads] = useState([]); // Initialize as an empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch all leads when the component mounts
    const fetchLeads = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/lead');
        
        console.log("get", response.data); // Log the full response

        // Check if the response contains 'leads' and if it's an array
        if (response.data.success && Array.isArray(response.data.leads)) {
          setLeads(response.data.leads); // Set the leads state with the data
        } else {
          throw new Error('Leads data is not in the expected format');
        }

        setLoading(false);
      } catch (err) {
        setError(err.message); // Handle error
        setLoading(false);
      }
    };

    fetchLeads();
  }, []);

  // Format the date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString(); // Return a human-readable date and time
  };

  if (loading) return <div className="text-center p-4">Loading...</div>;
  if (error) return <div className="text-center text-red-500 p-4">Error: {error}</div>;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-6">All Leads</h1>
      <div className="leads-list">
        {leads.length === 0 ? (
          <p className="text-center">No leads found.</p>
        ) : (
          <ul className="space-y-6 max-h-screen overflow-y-auto ">
            {leads.map((lead) => (
              <li key={lead._id} className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Name: {lead.name}</h3>
                <p><strong>Email:</strong> {lead.email}</p>
                <p><strong>Phone:</strong> {lead.phone}</p>
                <p><strong>Location:</strong> {lead.city}</p>
                <p><strong>Sub Location:</strong> {lead.sublocation}</p>
                <p><strong>Builder:</strong> {lead.builder}</p>
                <p><strong>Project:</strong> {lead.project}</p>
                <p><strong>Created At:</strong> {formatDate(lead.createdAt)}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
