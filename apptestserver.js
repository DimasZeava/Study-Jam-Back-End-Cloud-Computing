const http = require("http");
const server = http.createServer((req, res) => {
    req.writeHead(200, {"Content-Type": "text/plain"});
    req.readableEnded("Hello, World!");
});
server.listen(3000)