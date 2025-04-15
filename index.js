import express from 'express';
import { engine } from 'express-handlebars';
import path from 'path';

const __dirname = path.resolve();

const app = express();

console.log('__dirname', __dirname);
app.engine(
  'hbs',
  engine({
    extname: '.hbs',
    // defaultLayout:  path.join(__dirname, './views/layouts/main'),
    layoutsDirDir: path.resolve(__dirname, './views/layouts/'),
    partialsDir: path.resolve(__dirname, './views/partials/'),
  }),
);
app.set('view engine', 'hbs');
app.set('views', path.resolve(__dirname, './views'));

// app.set('views', path.join(__dirname, './views'));

// hbs.getPartials().then(function (partials) {
//   console.log(partials);
//   // => { 'foo/bar': [Function],
//   // =>    title: [Function] }
// });

app.get('/', (req, res) => {
  res.render('map', { activeLink: 'home', layout: 'with-map' });
});

app.get('/projects', (req, res) => {
  res.render('projects', { activeLink: 'projects', layout: 'main' });
});

app.get('/projects/create-project', (req, res) => {
  res.render('create-project', { activeLink: 'projects', layout: 'main' });
});

app.get('/project', (req, res) => {
  res.render('project', { activeLink: 'projects', layout: 'main' });
});

app.get('/settings', (req, res) => {
  res.render('settings', { activeLink: 'settings', layout: 'main' });
});

app.get('/admin', (req, res) => {
  res.render('admin', { activeLink: 'admin', layout: 'main' });
});

app.get('/project/device', (req, res) => {
  res.render('device', { activeLink: 'projects', layout: 'main' });
});

app.use(express.static('public'));

app.listen(3000, () => console.log('Server running on port 3000'));
