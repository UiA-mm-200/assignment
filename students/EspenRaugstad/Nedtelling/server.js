const express = require('express');
const bodyParser = require('body-parser');
const ct = require('./modules/countdown');
const Timer = require('./modules/countdown');
const server = express();


server.use(bodyParser.json());
server.use(express.static('public'));

let idArray = [0];
let timers = [];

server.post('/api/timer/start', (req, res)=>{
    let seconds = req.body.time;
    let message = req.body.message;

    let timerID = idArray[idArray.length - 1] + 1;
    idArray.push(timerID);

    let timer = new Timer(seconds, timerID, message);
    timer.startCountdown();
    timers.push(timer);
    
    let response = {
        timerID: timerID
    }

    res.status(200).json(response).end();

});

server.get('/api/timer/:timerID',(req,res)=>{

    let selectedTimerID = req.params.timerID;

    //1. Finn timeren i arrayen timers[].
    let selectedTimer = null;

    for(timer of timers){
        if(timer.ID === parseInt(selectedTimerID)){
            selectedTimer = timer;
            break;
        }
    }

    //2. Hent ut gjenværende tid
    let remainingTime = selectedTimer.seconds;

    //3. Hvis gjenværende tid <= 0, return gjenværende tid = 0 + message
    // else: Return gjenværende tid + message = "";

    let message = "";
    if(remainingTime <= 0){
        message = selectedTimer.message;
    }

    res.status(200).json({
        remainingTime: remainingTime,
        message: message
    }).end();

});

server.get('/api/getTimers',(req, res)=>{
    let timerIDs = [];
    for(let timer of timers){
        
        timerIDs.push(timer.ID);
    }

    let ids = {
        ids: timerIDs
    }

    res.status(200).json(ids).end();
});

server.set('port', (process.env.PORT || 8080));
server.listen(server.get('port'), function() {
    console.log('server running', server.get('port'));
});