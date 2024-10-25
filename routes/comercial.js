const express = require("express");
const helper = require("../helper");

const router = express.Router();

const comercialService = require("../services/comercialService");

router.get("/", async function(req,res){
    try{
        const data = await comercialService.getAllComercial();

     //   res.status(200).json({status: "correcto", data: data});
        res.status(200).json(helper.outputJSON("correcto","",data));
    } catch(error){
        console.error("Error in getAllComercial: " + error.message);
        res.status(501).json({status: "error", message: error.message});
    }



})


module.exports = router;