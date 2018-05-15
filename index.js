const express = require('express');
const randomItem =require('random-item')
const app = express();
const choices = require('./skilss.json');
app.set('view engine', 'pug');

app.use(express.static("public"));

function getWinner(userChoice, computerChoice) {
    if(userChoice.winOver.includes(computerChoice.id)){
        return userChoice;
    }

    if(computerChoice.winOver.includes(userChoice.id)){
        return computerChoice;
    }

    return null;
}

app.get('/',(request, response) => {
    response.render("home", {choices: choices});
});


app.get('/play/:choice',(request, response) => {
    console.log(request.params.choice);
    const userChoice = choices.find((choice) => {
        return choice.id === request.params.choice;
    });
    const computerChoice = randomItem(choices);
    const winner = getWinner(userChoice, computerChoice);

    let winnerName;
    if(winner===userChoice){
        winnerName = 'Computer';
    }
    else if(winner===computerChoice){
        winnerName = 'User';
    }

    response.render("play", { userChoice, computerChoice, winner , winnerName});
});




app.listen(3000);


