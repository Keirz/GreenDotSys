const dotenv = require('dotenv')
dotenv.config()
const express = require('express');
const app = express();
const path = require('path')
// const { login, teste } = require('./query')

app.use(express.json({}));
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', require('ejs-locals'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

const routes = require('./routes/index');

app.get('/dashboard', (req, res) => {
  res.render('dashboard', { games: [{ name: "AAA", description: "BBB" }] })
})

app.listen(3000, ()=>{
  console.log("O app está rodando na porta 3000!")
})
