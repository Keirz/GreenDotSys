const { Measurement } = require('../app/models');

async function insertMeasurement({value, sensorId}){
    try{

        return await Measurement.create({
            value,
            sensor_id: sensorId
        })
    }catch(err){
        console.log(err);
    }
}

async function getMeasurementById(id){
    return await Measurement.findOne({
        where: {
            id
        }
    });
}

async function getAllMeasurements(){
    try{
        return await Measurement.findAll({
            order: [["id", "ASC"]],
        });
    }catch(err){
        console.log(err);
    }
}

async function editMeasurement(){
    console.log("Implementar se precisar");
}

async function deleteMeasurement(){
    console.log("Implementar se precisar");
}




module.exports = {
    insertMeasurement,
    getMeasurementById,
    getAllMeasurements,
    editMeasurement,
    deleteMeasurement
}