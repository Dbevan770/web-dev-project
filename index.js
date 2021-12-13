const express = require('express');
const path = require('path')
const http = require('http')
const app = express();
const server = http.createServer(app);
const port = 3000;

app.use(express.static(path.join(__dirname + '/Public')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/Public', '/home.html'));
});
app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '/Public', 'register.html'));
});
app.get('/reset', (req, res) => {
    res.sendFile(path.join(__dirname, '/Public', 'reset.html'));
});

server.on('listening',function(){
    console.log(`HTTP Server listening on port ${port}...`);
});

server.listen(port);