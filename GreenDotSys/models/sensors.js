const { Sensor } = require('../app/models');

async function insertSensor({}){
    return await Sensor.create({
       
    })
}

async function getSensorById(id){
    return await Sensor.findOne({
        where: {
            id
        }
    });
}

async function getAllSensors(){
    return await Sensor.findAll({
        order: [["name", "ASC"]],
    });
}

async function editSensor(){
    console.log("Implementar se precisar");
}

async function deleteSensor(){
    console.log("Implementar se precisar");
}




module.exports = {
    insertSensor,
    getSensorById,
    getAllSensors,
    editSensor,
    deleteSensor
}