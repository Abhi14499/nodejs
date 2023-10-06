const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    if (url === '/home') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body>Welcome home</body>');
        res.write('</html');
        return res.end();
    }
    else if (url === '/about') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body> Welcome to About Us page</body>');
        res.write('</html');
        return res.end();
    }
    else if (url === '/node') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body>Welcome to my Node Js project</body>');
        res.write('</html');
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello From Node.js Server</body>');
    res.write('</html');
    res.end();

})

server.listen(4000);