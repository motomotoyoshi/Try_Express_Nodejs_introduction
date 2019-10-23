const express = require('express');
const app = express();

const myLogger = require('./myLogger.js');
app.use(myLogger);

const Square = require('./square.js');
const mySquare = new Square();

const wiki = require('./wiki.js');
app.use('/wiki', wiki);

const logger = require('morgan');
app.use(logger('dev'));

app.use('/media', express.static('public'));

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(3000, () => console.log('Example app listening on port 3000.' + mySquare.area(4)));
