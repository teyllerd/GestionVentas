const db = require("./db");
const helper = require('../helper');


async function getAllComercial(){
    let sql = "SELECT * FROM comercial";
    console.debug(sql);

    const resultado = await db.query(sql);
    const data = helper.emptyOrRows(resultado);

    return data;
}



module.exports = {
    getAllComercial
}