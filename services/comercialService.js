const db = require("./db");
const helper = require('../helper');


async function getAllComercial(){
    let sql = "SELECT * FROM comercial;";
    console.debug(sql);

    const resultado = await db.query(sql);
    const data = helper.emptyOrRows(resultado);

    return data;
}

async function getOneComercial(id){
    let sql = "SELECT * FROM comercial WHERE id = " + id + ";";
    console.debug(sql);

    const resultado = await db.query(sql);
    const data = helper.emptyOrRows(resultado);

    return data;
}

async function createComercial(comercial){
    let sql = "INSERT INTO `comercial`(`nombre`, `apellido1`, `apellido2`, `comision`)";
    sql += " VALUES ('"+comercial.nombre+"','"+comercial.apellido1+"','"+comercial.apellido2+"',"+comercial.comision+");"

    console.debug(sql);

    const resultado = await db.query(sql);
    const data = helper.emptyOrRows(resultado);

    return data;
}

module.exports = {
    getAllComercial,
    getOneComercial,
    createComercial
}