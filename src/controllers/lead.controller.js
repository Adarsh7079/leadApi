import bcrypt from "bcrypt";
import {sendCookie} from "../utils/feature.js"
import {ApiError} from "../utils/ApiError.js";
import { Lead } from "../models/lead.models.js";


export const createLead = async (req, res) => {
    try {
      const { name, phone, email } = req.body; // Extract from form
      const { slug } = req.params; // Extract from URL
       
      // Split the slug to extract data
      const parts = slug.split("-");
      console.log(parts)
      if (parts.length < 4) {
        return res.status(400).json({ message: "Invalid URL format" });
      }
  
      const builder = parts[0];
      const project = parts[1];
      const sublocation = parts.slice(2, parts.length - 1).join("-");
      const city = parts[parts.length - 1];
      
      // Create and save the new lead
      const newLead = new Lead({
        name,
        phone,
        email,
        builder,
        project,
        sublocation,
        city,
      });
  
      await newLead.save();
      
      res.status(201).json({ message: "Lead created successfully", lead: newLead });
    } catch (error) {
        console.log(error)
      res.status(500).json({ message: "Server error", error: error.message });
    }
  };
  
  export const getAllLeads = async (req, res) => {
    try {
      const leads = await Lead.find(); // Fetch all leads from DB
      res.status(200).json({ success: true, leads });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: "Server error", error: error.message });
    }
  };
  