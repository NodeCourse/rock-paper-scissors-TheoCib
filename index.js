const express = require('express');
const app = express();
const choices = require('./skilss.json');
app.set('view engine', 'pug');

app.use(express.static("public"));

app.get('/',(request, response) => {
    response.render("home", {choices: choices});
});


app.get('/result',(request, response) => {
    response.render("result");
});




app.listen(3000);


