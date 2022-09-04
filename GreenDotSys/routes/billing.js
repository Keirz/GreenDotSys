const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {

    const parameters = {

    }

    res.render('sign-in', parameters)
})

router.get('/login', (req, res) => {

    const parameters = {

    }

    res.render('sign-in', parameters)
})

router.get('/dashboard', (req, res) => {
    res.render('dashboard', { games: [{ name: "AAA", description: "BBB" }] })
})

router.post('/login', (req, res) => {
    const { username, password } = req.body;
    const auth = login(username, password)
    res.status(200).json({ mock: "meu ovo" })
})

router.post('/survey', (req, res) => {
    console.log(req.body)
    const { interests, degree, workHours, profile } = req.body
   
})


module.exports = router;

