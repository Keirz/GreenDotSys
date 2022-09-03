const express = require('express');

const app = express();


app.get('/cadastro', (req,res) => {
    const { name, email, telefone } = req.body;
    
    classeDoBancoDeDados.insert(tableName,{name, email, telefone})

    res.send("Usuario criado!")
})

app.get('/ligh', (req,res) => {
    console.log("A TEMPERATURA É -11ºC")
    res.send({
        sensorId: 12,
        sensorType: 'Tempetature',
        sensorData: '11'
    })
})

app.listen(3000, () =>{
    console.log("Server on")
})