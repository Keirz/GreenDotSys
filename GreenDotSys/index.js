const dotenv = require('dotenv')
dotenv.config()
const express = require('express');
const app = express();
const path = require('path');
const { billing } = require('./routes/index');

app.use(express.json({}));
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', require('ejs-locals'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

const sensorData = require('./controller/sensorData');
const {registerMeasurement} = require('./controller/measurement');
sensorData.subscribe('greendotsys', registerMeasurement);


const routes = require('./routes/index');
app.use('/billing', routes.billing);
app.use('/dashboard', routes.dashboard);
app.use('/profile', routes.profile);
app.use('/login', routes.signin);
app.use('/signup', routes.signup);
app.use('/tables', routes.tables);
app.use('/vr', routes.vr);
app.use('/', routes.signin);


app.listen(3000, ()=>{
  console.log("O app está rodando na porta 3000!")
})
