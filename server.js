// Dependencies
// =============================================================
const express = require('express');
const path = require('path');
const session= require('express-session');
// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3002;

const exphbs = require('express-handlebars');
const sequelize = require('./config/connection');


app.engine('handlebars',exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'./public')));

app.use(require('./controllers/'));

// sequelize.sync({force:false}).then(()=>{
  
// })
app.listen(PORT, () => {
    console.log('Server listening on: http://localhost:' + PORT);
  });