import http from "http";
import fs from "fs";

const port = 3000;

const server = http.createServer(function(req, res) {
  if(req.method === "GET") {
    console.log("in GET");
    if(req.url === "/") {
      console.log("in GET in mainPageUrl");
      const page = fs.readFileSync("./index.html");
      res.writeHead(200, {"Content-type" : "utf-8; text/html"});
      res.write(page);
      res.end();
    }
  }
})

server.listen(port, () => {
  console.log(`서버 동작 중 http://localhost:${port}`);
})