import fs from "fs";

function fsReadFile() {
  const dataString = fs.readFileSync('data.JSON').toString();
  return "imFsReadfile";
}

export { fsReadFile }