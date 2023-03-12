const http = require('http');


const server = http.createServer(async (req, res) => {
    if(req.url === '/' && req.method === 'GET'){
        res.statusCode = 200;
        res.end('Hello World');
    }
});


server.listen(3001, () => {
    console.log('Server is running on port 3001');
}
);