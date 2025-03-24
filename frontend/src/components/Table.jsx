import React, { useState, useEffect } from "react";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";

export const Table = () => {
  const [leads, setLeads] = useState([]);
  const [filteredLeads, setFilteredLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const response = await axios.get("https://backend-lead.onrender.com/api/lead");

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

  // Format date (YYYY-MM-DD)
  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return !isNaN(date.getTime()) ? date.toISOString().split("T")[0] : "Invalid Date";
  };

  // Format time (HH:MM:SS AM/PM)
  const formatTime = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return !isNaN(date.getTime()) ? date.toLocaleTimeString("en-US", { hour12: true }) : "Invalid Time";
  };

  // Filter Leads when `fromDate` or `toDate` changes
  useEffect(() => {
    if (!fromDate && !toDate) {
      setFilteredLeads(leads);
      return;
    }

    setFilteredLeads(
      leads.filter((lead) => {
        const leadDate = formatDate(lead.createdAt);
        return (
          (!fromDate || leadDate >= fromDate) &&
          (!toDate || leadDate <= toDate)
        );
      })
    );
  }, [fromDate, toDate, leads]);

  // Rows transformation
  const rows = filteredLeads.map((lead, index) => ({
    id: index + 1,
    ...lead,
    createdDate: lead?.createdAt ? formatDate(lead.createdAt) : "N/A",
    createdTime: lead?.createdAt ? formatTime(lead.createdAt) : "N/A",
  }));

  // Columns definition
  const columns = [
    { field: "id", headerName: "S. No", width: 70 },
    { field: "createdDate", headerName: "Created Date", width: 160 },
    { field: "createdTime", headerName: "Created Time", width: 160 },
    { field: "name", headerName: "Name", width: 200 },
    { field: "email", headerName: "Email", width: 350 },
    { field: "phone", headerName: "Phone", width: 150 },
    { field: "city", headerName: "Location", width: 150 },
    { field: "sublocation", headerName: "Sub Location", width: 200 },
    { field: "builder", headerName: "Builder", width: 150 },
    { field: "project", headerName: "Project", width: 150 },
  ];

  if (loading) return <div className="text-center p-4">Loading...</div>;
  if (error) return <div className="text-center text-red-500 p-4">Error: {error}</div>;

  // Get today's date for date picker max value
  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-6">All Leads</h1>

      {/* Date Filters */}
      <div className="flex justify-center gap-4 mb-6">
        <div className="flex flex-col">
          <label className="mb-1 text-sm font-semibold">From Date:</label>
          <input
            type="date"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
            max={today}
            className="border p-2 rounded-lg shadow-sm"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-sm font-semibold">To Date:</label>
          <input
            type="date"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
            max={today}
            className="border p-2 rounded-lg shadow-sm"
          />
        </div>
      </div>

      <Paper sx={{ height: 600, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSizeOptions={[5, 10, 25, 50]}
          pagination
          checkboxSelection
          sx={{ border: 1 }}
        />
      </Paper>
    </div>
  );
};
