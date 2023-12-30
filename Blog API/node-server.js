const http = require('http');
//nodemon digunakan untuk memantau perubahan pada file
const host = 'localhost';
const port = 8000;

const requestListener = (req, res) => {
    if (req.url === '/post') {
        res.end('This is post page');
    } else if (req.url == '/about') {
        res.end("This is about page");
    } else if (req.url == '/feed/trending'){
        res.end("This is trending page");
    } else {
        res.end('Hello World');
    }
};

const server = http.createServer(requestListener);

server.listen(port, host, () => {
console.log(`Server is running on http://${host}:${port}`);
});
