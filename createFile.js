import fs from "fs";
import qs from "querystring";

function createFile(data) {
  const dataString = data.toString();
  const qsObj = qs.parse(dataString);
  const dataJSON = JSON.stringify(qsObj);
  fs.writeFileSync("data.JSON", dataJSON, {flag : "a"});
}

export { createFile }