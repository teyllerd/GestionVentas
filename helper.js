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
  let jsonOutput = "{status: " + status + ",";
  let coma = false;
  if(message!== undefined && typeof message === "string" && message.length>0);{
    jsonOutput += "message: "+message;
    coma = true;
  }

  if (
    (data !== undefined && data.length > 0) ||
    (data !== undefined && typeof data === 'object' && !Array.isArray(data))
  ) {
    if(coma){
      jsonOutput += ",";
    }
    jsonOutput += "data: "+data;
  }

}

module.exports = {
  getOffset,
  emptyOrRows,
  outputJSON
}