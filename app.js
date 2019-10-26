const express = require('express');
const myLogger = require('./myLogger.js');
const ejs = require('ejs');
const logger = require('morgan');
const app = express();
const session = require('express-session');

app.engine('ejs', ejs.renderFile);
app.use(myLogger);
app.use(logger('dev'));
app.use(session({
	secret: 'hoge',
	resave: true,
	saveUninitialized: true,
}));

app.get('/', (req, res) => {
	let cnt = req.session.cnt == undefined ? 0: req.session.cnt;
	cnt++;
	req.session.cnt = cnt;

	res.render('template.ejs', {
		cnt: cnt
	});
});

app.listen(3000, () => console.log('Example app listening on port 3000.'));
