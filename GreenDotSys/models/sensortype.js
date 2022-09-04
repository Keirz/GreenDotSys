const { DSensorType } = require('../app/models');

// POPULAR VIA SEED 

async function getDSensorTypeById(id){
    return await DSensorType.findOne({
        where: {
            id
        }
    });
}

async function getAllDSensorTypes(){
    return await DSensorType.findAll({
        order: [["name", "ASC"]],
    });
}

module.exports = {
    getDSensorTypeById,
    getAllDSensorTypes,

}