const http = require('http');
const status = require('./pcRunUsage.js');
const host = 'http://localhost:';
const port = 3000;

http.createServer((req, res) => {
    let url = req.url;

    if (url === '/') {
        res.end("<h1>Hello Word</h1>");
    }

    if(url === '/status'){
        res.end(JSON.stringify(status, null, 2));
    }

}).listen(port, () => console.log(`Server is running ${host}${port}, ${status}`));

