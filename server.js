const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('./config/database'); //databse configuration

const app = express();

const server = require('https').createServer(app);

// connection to mongodb
mongoose.connection.on(
    'error',
    console.error.bind(console, 'MongoDB connection error:')
);
app.use(logger('dev'));

// Body parser middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.json({ tutorial: 'Testing restapi ok' });
});

//register router
const users = require('./api/routes/users');
const posts = require('./api/routes/posts');

// route
app.use('/users', users);
app.use('/posts', posts);

// handle 404 error
app.use(function (req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});
// handle errors
app.use(function (err, req, res, next) {
    console.log(err);
    if (err.status === 404) res.status(404).json({ message: 'Not found' });
    else res.status(500).json({ message: 'Something looks wrong :( !!!' });
});

app.listen(300, function () {
    console.log('Node http listening on port 300');
});
