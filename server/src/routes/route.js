const express = require("express");
const router=express.Router()
const {postAboutData,getAboutData}=require("../controllers/aboutController");
const { getAdminData, postAdminData } = require("../controllers/adminController");
const { getContactData, postContactData } = require("../controllers/formController");
//==============about api's=======================//
router.get("/getAbout",getAboutData);
router.post("/createAbout",postAboutData);


//=============contactus api's====================//
router.get("/getContact", getContactData);
router.post("/createContact", postContactData);


//=============admin api's=========================//
router.post("/getAdmin", postAdminData);
router.post("/createAdmin", getAdminData);

module.exports=router