function getOffset(currentPage = 1, listPerPage) {
  return (currentPage - 1) * [listPerPage];
}

function emptyOrRows(rows) {
  if (!rows) {
    return [];
  }
  return rows;
}

function outputJSON(status, message, data) {
  let jsonOutput = '{"status": "' + status + '"';
  
  if(message!== undefined && typeof message === "string" && message.length>0){
    jsonOutput += ',"message": "'+message+'"';
  }

  if (
    (data !== undefined && data.length > 0) || //es un array con longitud >0 
    (data !== undefined && typeof data === 'object' && !Array.isArray(data)) // o es un objeto que no es un array (JSON)
  ) {
    jsonOutput += ',"data": '+JSON.stringify(data);
  }
    
  jsonOutput += '}';
  return JSON.parse(jsonOutput);
}

module.exports = {
  getOffset,
  emptyOrRows,
  outputJSON
}