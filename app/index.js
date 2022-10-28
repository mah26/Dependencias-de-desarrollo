//Loads the express module
const express = require('express');
//Creates our express server
const app = express();
const port = 3000;
const hostname = '127.0.0.1'; //Conexión local

//Loads the handlebars module
const hbs = require('express-handlebars');

//Sets our app to use the handlebars engine
app.set('view engine', 'hbs');

//Sets handlebars configurations (we will go through them later on)
app.engine('hbs', hbs.engine({
    layoutsDir: __dirname + '/views/layouts',
    extname: 'hbs',
    //defaultLayout: 'plan_B',
    //new configuration parameter
    partialsDir: __dirname + '/views/partials/'
    }));

//Serves static files (we need it to import a css file)
app.use(express.static('public'))

fakeApi = () => {
    return [
      {
        name: 'Katarina',
        lane: 'midlaner'
      },
      {
        name: 'Jayce',
        lane: 'toplaner'
      },
      {
        name: 'Heimerdinger',
        lane: 'toplaner'
      },
      {
        name: 'Zed',
        lane: 'midlaner'
      },
      {
        name: 'Azir',
        lane: 'midlaner'
      }
    ];
  }

//Sets a basic route
app.get('/', (req, res) => {
    //Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
    res.render('main', {layout: 'index', proPlayer: fakeApi()});
    });

//Makes the app listen to port 3000
app.listen(port, () => console.log(`App listening to port ${port}`));
