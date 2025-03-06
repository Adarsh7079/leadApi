import { Router } from "express";
import express from "express"
import {createLead,getAllLeads} from "../controllers/lead.controller.js";
const router=express.Router();

router.post("/lead/:slug",createLead);
router.get("/lead",getAllLeads);

export default router