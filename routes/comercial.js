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
        //res.status(501).json({status: "error", message: error.message});
        res.status(501).json(helper.outputJSON("error", error.message));
    }

})

router.get("/:id", async function(req,res){
    try{
        const id = req.params.id;
        const data = await comercialService.getOneComercial(id);

        res.status(200).json(helper.outputJSON("correcto","",data[0]));
    } catch(error){
        console.error("Error in getOneComercial: " + error.message);
        res.status(501).json(helper.outputJSON("error", error.message));
    }
})

router.post("/", async function (req,res) {
    const {nombre, apellido1, apellido2, comision} = req.body;
    console.log("Datos: " + nombre + " " + apellido1 + " " + apellido2 + " " + comision);
    if(nombre == undefined || apellido1 == undefined || apellido2 == undefined || comision == undefined){
        //Faltan datos
        const mensaje = "Error al obtener datos. Los 4 datos son obligatorios";
        res.status(400).json(helper.outputJSON("Error", mensaje));
    } else {
        let comercial = {
            nombre: nombre,
            apellido1: apellido1,
            apellido2: apellido2,
            comision: comision
        }
        try {
            const data = await comercialService.createComercial(comercial);
            console.debug(data);
            const mensaje = "Comercial creado con id: " + data.insertId;
            const comercialCreado = await comercialService.getOneComercial(data.insertId);
    
            res.status(201).json(helper.outputJSON("correcto",mensaje,comercialCreado[0]));
        } catch (error){
            console.error("Error in createComercial: " + error.message);
            res.status(501).json(helper.outputJSON("error", error.message));
        }
    }
})

module.exports = router;