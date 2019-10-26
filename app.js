const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
app.use(cookieParser());

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
	let cnt = req.cookies.cnt == undefined ? 0: req.cookies.cnt;
	cnt++;
	res.cookie('cnt', cnt, {maxAge: 5000});

	res.render('template.ejs', {
		cnt: cnt
	});
});

// app.use((err, req, res, next) => {
//     console.error(err.static);
//     res.status(500).send('Something broke!');
// })

app.listen(3000, () => console.log('Example app listening on port 3000.'));
