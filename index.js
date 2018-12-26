const http = require('http');

const requestHandler = (req, res) => {
    console.log(req.url);
    res.end('Hello World!');
};

const server = http.createServer(requestHandler);

server.listen(process.env.PORT || 3001, err => {
    if (err) throw err;
    
console.log(`Server running on PORT ${server.address().port}`);
});