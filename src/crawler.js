const http = require("http");

const PORT = process.env.PORT || 5000;

const server = http.createServer(async (req, res) => {
  if (req.url === "/api" && req.method === "GET") {
    res.writeHead(200, { "Content-type": "application/json", 'Access-Control-Allow-Origin': '*' });
    // res.write("Hi there, Hello");
    res.end(JSON.stringify({message: "ROute not Found"}));
  } else {
    res.writeHead(404, { "Content-type": "application/json" });
    res.end(JSON.stringify({message: "ROute not Found"}));
  }
})

server.listen(PORT, ()=> {
  console.log(`server started on port: ${PORT}`)
})