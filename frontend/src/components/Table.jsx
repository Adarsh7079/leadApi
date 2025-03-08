import React, { useState, useEffect } from "react";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";

export const Table = () => {
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

  // Safe date formatting function for display
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date instanceof Date && !isNaN(date) ? date.toISOString().split("T")[0] : "Invalid Date";
  };

  // Safe time formatting function for display
  const formatTime = (dateString) => {
    const date = new Date(dateString);
    return date instanceof Date && !isNaN(date) ? date.toLocaleTimeString() : "Invalid Time";
  };

  const handleDateChange = (event) => {
    const selected = event.target.value;
    setSelectedDate(selected);
    if (!selected) {
      setFilteredLeads(leads);
    } else {
      setFilteredLeads(
        leads.filter(
          (lead) => lead.createdAt && formatDate(lead.createdAt) === selected
        )
      );
    }
  };

  // Columns definition
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Name", width: 130 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "phone", headerName: "Phone", width: 130 },
    { field: "city", headerName: "Location", width: 130 },
    { field: "sublocation", headerName: "Sub Location", width: 130 },
    { field: "builder", headerName: "Builder", width: 130 },
    { field: "project", headerName: "Project", width: 130 },
    {
      field: "createdDate",
      headerName: "Created Date",
      width: 160,
      valueGetter: (params) => {
        const createdAt = params?.row?.createdAt;
        return createdAt ? formatDate(createdAt) : "N/A";
      },
    },
    {
      field: "createdTime",
      headerName: "Created Time",
      width: 160,
      valueGetter: (params) => {
        const createdAt = params?.row?.createdAt;
        return createdAt ? formatTime(createdAt) : "N/A";
      },
    },
  ];

  // Rows transformation
  const rows = filteredLeads.map((lead, index) => ({ id: index + 1, ...lead }));

  // Loading and error states
  if (loading) return <div className="text-center p-4">Loading...</div>;
  if (error) return <div className="text-center text-red-500 p-4">Error: {error}</div>;

  // Get today's date for date picker max value
  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-6">All Leads</h1>
      
      <div className="flex justify-center mb-6">
        <input
          type="date"
          value={selectedDate}
          onChange={handleDateChange}
          max={today}  // Prevent selecting future dates
          className="border p-2 rounded-lg shadow-sm"
        />
      </div>

      <Paper sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          sx={{ border: 1 }}
        />
      </Paper>
    </div>
  );
};
