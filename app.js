const express = require('express');
const app = express();

const myLogger = require('./myLogger.js');
app.use(myLogger);

const ejs = require('ejs');
const bodyParser = require('body-parser');
app.engine('ejs', ejs.renderFile);
app.use(bodyParser.urlencoded({
	extended: true
}));

const Square = require('./square.js');
const mySquare = new Square();

const wiki = require('./wiki.js');
app.use('/wiki', wiki);

const logger = require('morgan');
app.use(logger('dev'));

app.use('/media', express.static('public'));

app.get('/', (req, res) => {
	console.log('---GET Request---');
	console.log('Name is ' + req.query.name);
	console.log('Age is ' + req.query.age);
	res.render('template.ejs', {})
});


app.post('/', (req, res) => {
	console.log('---POST Request---');
	console.log('Name is ' + req.body.name);
	console.log('Age is ' + req.body.age);
	res.render('template.ejs', {})
});

app.use((err, req, res, next) => {
    console.error(err.static);
    res.status(500).send('Something broke!');
})

app.listen(3000, () => console.log('Example app listening on port 3000.' + mySquare.area(4)));
