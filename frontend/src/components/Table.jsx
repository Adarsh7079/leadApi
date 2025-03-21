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
        const response = await axios.get("https://backend-lead.onrender.com/api/lead");
        
        if (response.data.success && Array.isArray(response.data.leads)) {
          setLeads(response.data.leads);
          setFilteredLeads(response.data.leads);
  
          // ✅ Check state update
          setTimeout(() => {
            // console.log("Updated Leads in State:", leads);
          }, 1000);
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
  

  // Function to format date (YYYY-MM-DD)
  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
   
    return !isNaN(date.getTime()) ? date.toISOString().split("T")[0] : "Invalid Date";
  };

  // Function to format time (HH:MM:SS AM/PM)
  const formatTime = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    
    return !isNaN(date.getTime()) ? date.toLocaleTimeString("en-US", { hour12: true }) : "Invalid Time";
  };

  const handleDateChange = (event) => {
    const selected = event.target.value;
    setSelectedDate(selected);
    if (!selected) {
      setFilteredLeads(leads);
    } else {
      setFilteredLeads(
        leads.filter(
          (lead) => lead?.createdAt && formatDate(lead.createdAt) === selected
        )
      );
    }
  };

  // Rows transformation - Ensures `createdAt` is correctly passed
  const rows = filteredLeads.map((lead, index) => {
    // console.log(`Row ${index + 1}:`, lead); // ✅ Debugging each row from API response

    return {
      id: index + 1,
      ...lead, // Spread all properties to ensure createdAt is included
      createdAt: lead?.createdAt || "N/A", // ✅ Explicitly ensure createdAt is present
      createdDate: lead?.createdAt ? formatDate(lead.createdAt) : "N/A",
      createdTime: lead?.createdAt ? formatTime(lead.createdAt) : "N/A",
     
    };
  });
  // console.log("get: ",rows);

  // Columns definition
  const columns = [
    { field: "id", headerName: "S. No", width: 70 },
    { field: "name", headerName: "Name", width: 200 },
    { field: "email", headerName: "Email", width: 350 },
    { field: "phone", headerName: "Phone", width: 150 },
    { field: "city", headerName: "Location", width: 150 },
    { field: "sublocation", headerName: "Sub Location", width: 200 },
    { field: "builder", headerName: "Builder", width: 150 },
    { field: "project", headerName: "Project", width: 150 },
    {
      field: "createdDate",
      headerName: "Created Date",
      width: 160,
      valueGetter: (params) => {
        return params? params : "N/A";
      },
    },
    {
      field: "createdTime",
      headerName: "Created Time",
      width: 160,
      valueGetter: (params) => {
        // console.log("Row Data in Grid:", params?.row);
        // console.log("createdAt in Grid:", params?.row?.createdAt);

        return params?params: "N/A";
      },
    },
 
   
  ];

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
          max={today} // Prevent selecting future dates
          className="border p-2 rounded-lg shadow-sm"
        />
      </div>

      <Paper sx={{ height: 600, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSizeOptions={[5, 10, 25, 50]} // ✅ Pagination select
          pagination // ✅ Enable pagination
          checkboxSelection
          sx={{ border: 1 }}
        />
      </Paper>
    </div>
  );
};
