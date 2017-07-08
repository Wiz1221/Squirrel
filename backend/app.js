import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import Debug from 'debug';
import express from 'express';
import logger from 'morgan';
// import favicon from 'serve-favicon';
import path from 'path';
import lessMiddleware from 'less-middleware';
import index from './routes/index';
import mongoose from 'mongoose';
import socket from 'socket.io';

const app = express();
const debug = Debug('backend:app');

// //App setup

// const server = require('https').Server(option, app);
// const io = require('socket.io')(server)
// 
// var server = app.listen(3001,function(){
//   console.log('listening to port 3001')
// });
//
// var io = socket(server);
//
// io.on('connection', function(socket){
//   console.log('made connection');
//   socket.on("new-message", function(msg) {
//     console.log(msg);
//     io.emit("receive-message",msg);
//   })
// });


// Setup Mongoose connection to MongoDB
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/squirreldb', {
                  useMongoClient: true,});
mongoose.connection.on('error', (err) => {
  console.error(err);
  console.log('%s MongoDB connection error. Please make sure MongoDB is running.', chalk.red('✗'));
  process.exit();
});





// socket.io



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(cookieParser());
// app.use(lessMiddleware(path.join(__dirname, 'public')));
// app.use(express.static(path.join(__dirname, 'public')));
//
// app.use('/', index);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
/* eslint no-unused-vars: 0 */
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// Handle uncaughtException
process.on('uncaughtException', (err) => {
  debug('Caught exception: %j', err);
  process.exit(1);
});

export default app;
