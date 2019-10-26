const express = require('express');
const myLogger = require('./myLogger.js');
const ejs = require('ejs');
const logger = require('morgan');
const app = express();

let msg = '';

app.engine('ejs', ejs.renderFile);
app.use(myLogger);
app.use(logger('dev'));

app.get('/', (req, res) => {
	res.render('template.ejs', {});
});

app.post('/ajax', (req, res) => {
	msg += 'hoge';
	res.json({
		msg: msg
	});
});

app.listen(3000, () => console.log('Example app listening on port 3000.'));
