const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(require('./routes/route'));

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({
    error: process.env.NODE_ENV === 'production' ? 'Internal server error' : err.message
  });
});

module.exports = app;