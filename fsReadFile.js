import fs from "fs";

function fsReadFile() {
  const arrayJSON = [];
  const dataString = fs.readFileSync('data.JSON').toString();

  if(dataString !== ''){
    const dataObj = JSON.parse(dataString);
    dataObj.forEach(element => {
      arrayJSON.push(element);
    });
  }
  
  return dataString;
}

export { fsReadFile }