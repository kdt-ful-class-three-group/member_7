import http from "http";
import fs from "fs";
import qs from "querystring";

const port = 3000;

const server = http.createServer(function (req, res) {
  if (req.method === "GET") {
    console.log("in GET");
    if (req.url === "/") {
      console.log("in GET in mainPageUrl");
      const page = fs.readFileSync("./index.html");
      res.writeHead(200, { "Content-type": "utf-8; text/html" });
      res.write(page);
      res.end();
    }
  } else if (req.method === "POST") {
    console.log("in POST");
    if (req.url === "/form") {
      console.log("in POST in formURL");
      req.on('data', (data) => {
        const qsObj = qs.parse(data.toString());
        const dataJson = JSON.stringify(qsObj);
        fs.writeFileSync("data.JSON", dataJson);
      });
      res.on('end', () => {
        const jsonFile = fs.readFileSync("data.JSON").toString();
        res.write(jsonFile);
      })
      res.end();
    }
  }
})

server.listen(port, () => {
  console.log(`서버 동작 중 http://localhost:${port}`);
})