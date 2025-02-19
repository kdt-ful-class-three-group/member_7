import http from "http";
import fs from "fs";
import { createFile } from "./createFile.js";
import { fsReadFile } from "./fsReadFile.js";

const port = 3000;

const server = http.createServer(function (req, res) {
  if (req.method === "GET") {
    if (req.url === "/") {
      const page = fs.readFileSync("./index.html");
      res.writeHead(200, { "Content-type": "utf-8; text/html" });
      res.write(page);
      res.end();
    }
  } else if (req.method === "POST") {
    if (req.url === "/form") {
      req.on('data', (data) => {
        createFile(data);
      });
      req.on('end', () => {
        const data = fsReadFile();
        res.writeHead(200, { "Content-type": "utf-8; text/html" });
        res.write(JSON.stringify(data, null, 2));
        res.end();
      })
    }
  }
})

server.listen(port, () => {
  console.log(`서버 동작 중 http://localhost:${port}`);
})