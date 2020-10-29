const express = require('express');
const bodyParser = require('body-parser');
const server = express();
server.set('port', (process.env.PORT || 8080));
server.use(express.static('public'));
server.use(bodyParser.json());

let timers = [];

server.post('/start', (req, res) => {
    let timerId = Math.random().toString(36).substring(3);
    let timer = {
        timerID: timerId,
        time: req.body.time,
        message: req.body.message
    };

    timers.push(timer);
    console.log(timers);
    res.status(200).json(timerId).end();
});

server.get('/timer/:timerId', (req, res) => {
    const { timerId } = req.params;
    const timeNow = new Date().getTime();
    const timer = timers.find(timer => timer.timerID === timerId);

    if (!timer) {
        res.status(200).json({ msg: 'No timer with such ID' });
        return;
    }

    if (timer.time > timeNow) {
        res.status(200).json({
            remainingTime: timer.time - timeNow,
            msg: timer.message
        });
        return;
    }

    res.status(200).json({ msg: timer.message });
    return;
});

server.listen(server.get('port'), function () { console.log('server running', server.get('port'))});