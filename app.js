const express = require('express');
const app = express();
const Square = require('./square.js');
const mySquare = new Square();
const wiki = require('./wiki.js');
app.use('/wiki', wiki);

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(3000, () => console.log('Example app listening on port 3000.' + mySquare.area(4)));
