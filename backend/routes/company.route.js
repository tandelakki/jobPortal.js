import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";

import { registerCompany, getCompany, getCompanyById,updateCompany } from "../controllers/company.controller.js";
import { singleUpload } from "../middlewares/multer.js";
const router = express.Router();


router.post("/register",isAuthenticated, registerCompany);
router.route("/get").get(isAuthenticated,getCompany);
router.route("/get/:id").get(isAuthenticated,getCompanyById);
router.put("/update/:id", isAuthenticated,singleUpload, updateCompany);


export default router;