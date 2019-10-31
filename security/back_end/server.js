const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const winston = require('winston');

const app = express();

const whiteList = ['http://localhost:52330', 'http://example2.com'];
const corsOptions = {
    origin: (origin, callback) => {
        if (whiteList.indexOf(origin) !== -1) {
            callback(null, true);
        }
        else {
            callback(new Error('Not allowed by CORS'));
        }
    }
};

app.use(cors(corsOptions));
app.use(helmet());
app.use(express.json());
// app.use(morgan('combined'));

app.get('/', (req, res) => {
    res.cookie('session', '1', { httpOnly: true });
    res.cookie('session', '1', { secure: true });
    res.set({
        'Content-Security-Policy': "script-src 'self' 'https://api.google.com'"
    });
    res.send('Hello World!');
});

app.post('/secret', (req, res) => {
    const {
        userInput
    } = req.body;
    // console.log(userInput);
    if (userInput) {
        winston.log('info', 'user input: ' + userInput);
        res.status(200).json('success');
    } else {
        // winston.error('This guy is messing with us:' + userInput);
        res.status(400).json('incorrect submission');
    }
})

app.listen(3000, () => console.log('Example app listening on port 3000!'));