import express from 'express';
import { engine } from 'express-handlebars';
import path from 'path';

const __dirname = path.resolve();

const app = express();


console.log("__dirname", __dirname)
app.engine('hbs', engine({ 
  extname: '.hbs',
  // defaultLayout:  path.join(__dirname, './views/layouts/main'),
  layoutsDirDir:  path.resolve(__dirname, './views/layouts/'),
  partialsDir:  path.resolve(__dirname, './views/partials/')
}));
app.set('view engine', 'hbs');
app.set('views',  path.resolve(__dirname, "./views"));

// app.set('views', path.join(__dirname, './views'));

// hbs.getPartials().then(function (partials) {
//   console.log(partials);
//   // => { 'foo/bar': [Function],
//   // =>    title: [Function] }
// });

app.get('/', (req, res) => {
  res.render('index', { name: 'Alex', layout: 'main' });
});

app.listen(3000, () => console.log('Server running on port 3000'));