const express = require('express');
const morgan = require('morgan');
//const dbuRI = mongodb+srv://akashcs22:akashks123@cluster1.h9x7ebb.mongodb.net/
// express app
const app = express();

// listen for requests
app.listen(3000);

// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(morgan('dev')); // Morgan for logging
app.use(express.static('public')); // Serving static files
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/ourworks', (req, res) => {
  res.render('ourworks');
});
app.get('/aboutus', (req, res) => {
  res.render('aboutus');
});
app.get('/sproduct1', (req, res) => {
  res.render('sproduct1');
});
app.get('/sproduct2', (req, res) => {
  res.render('sproduct2');
});
app.get('/sproduct3', (req, res) => {
  res.render('sproduct3');
});
app.get('/sproduct4', (req, res) => {
  res.render('sproduct4');
});
app.get('/sproduct5', (req, res) => {
  res.render('sproduct5');
});
app.get('/sproduct6', (req, res) => {
  res.render('sproduct6');
});
app.get('/sproduct7', (req, res) => {
  res.render('sproduct7');
});
app.get('/sproduct8', (req, res) => {
  res.render('sproduct8');
});
app.get('/donate', (req, res) => {
  res.render('donate');
});

app.get('/projects', (req, res) => {
  res.render('projects');
});
app.get('/getinvolved', (req, res) => {
  res.render('getinvolved');
});


// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});