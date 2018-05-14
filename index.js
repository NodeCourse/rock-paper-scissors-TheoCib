/*const http = require('http');
http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end('Hello World');
}).listen(3000);*/

const express = require('express');
const app = express();
app.set('view engine', 'pug');

app.use(express.static("public"));

app.get('/',(request, response) => {
    response.render("home");
});


app.get('/result',(request, response) => {
    response.render("result");
});

app.get('/result/:choice', (request, response) => {
    
});


app.listen(3000);


