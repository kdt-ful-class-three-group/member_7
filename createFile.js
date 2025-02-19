import { fsReadFile } from "./fsReadFile.js";

import fs from "fs";
import qs from "querystring";

function createFile(data) {
  const dataString = data.toString();
  const qsObj = qs.parse(dataString);
  const arrayJSON = fsReadFile();
  arrayJSON.push(qsObj);
  const dataJSON = JSON.stringify(arrayJSON, null, 2);
  fs.writeFileSync("data.JSON", dataJSON);
}

export { createFile }