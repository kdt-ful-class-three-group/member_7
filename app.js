import http from "http";

const port = 3000;

const server = http.createServer(function(req, res) {
  console.log("connected");
})

server.listen(port, () => {
  console.log(`서버 동작 중 http://localhost:${port}`);
})