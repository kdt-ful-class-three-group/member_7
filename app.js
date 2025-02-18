import http from "http";

const port = 3000;

const server = http.createServer(function(req, res) {
  if(req.method === "GET") {
    console.log("in GET");
    if(req.url === "/") {
      console.log("in GET in mainPageUrl");
    }
  }
})

server.listen(port, () => {
  console.log(`서버 동작 중 http://localhost:${port}`);
})