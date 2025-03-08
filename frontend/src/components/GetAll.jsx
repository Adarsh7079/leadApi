import React, { useState, useEffect } from "react";
import axios from "axios";

export const GetAll = () => {
  const [leads, setLeads] = useState([]);
  const [filteredLeads, setFilteredLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/lead");
        if (response.data.success && Array.isArray(response.data.leads)) {
          setLeads(response.data.leads);
          setFilteredLeads(response.data.leads);
        } else {
          throw new Error("Leads data is not in the expected format");
        }
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchLeads();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  const handleDateChange = (event) => {
    const selected = event.target.value;
    setSelectedDate(selected);
    if (!selected) {
      setFilteredLeads(leads);
    } else {
      setFilteredLeads(
        leads.filter((lead) => formatDate(lead.createdAt) === formatDate(selected))
      );
    }
  };

  if (loading) return <div className="text-center p-4">Loading...</div>;
  if (error) return <div className="text-center text-red-500 p-4">Error: {error}</div>;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-6">All Leads</h1>
      
      <div className="flex justify-center mb-6">
        <input
          type="date"
          value={selectedDate}
          onChange={handleDateChange}
          className="border p-2 rounded-lg shadow-sm"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Email</th>
              <th className="border px-4 py-2">Phone</th>
              <th className="border px-4 py-2">Location</th>
              <th className="border px-4 py-2">Sub Location</th>
              <th className="border px-4 py-2">Builder</th>
              <th className="border px-4 py-2">Project</th>
              <th className="border px-4 py-2">Created At</th>
            </tr>
          </thead>
          <tbody>
            {filteredLeads.length === 0 ? (
              <tr>
                <td colSpan="8" className="text-center py-4">No leads found.</td>
              </tr>
            ) : (
              filteredLeads.map((lead) => (
                <tr key={lead._id} className="border">
                  <td className="border px-4 py-2">{lead.name}</td>
                  <td className="border px-4 py-2">{lead.email}</td>
                  <td className="border px-4 py-2">{lead.phone}</td>
                  <td className="border px-4 py-2">{lead.city}</td>
                  <td className="border px-4 py-2">{lead.sublocation}</td>
                  <td className="border px-4 py-2">{lead.builder}</td>
                  <td className="border px-4 py-2">{lead.project}</td>
                  <td className="border px-4 py-2">{formatDate(lead.createdAt)}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
