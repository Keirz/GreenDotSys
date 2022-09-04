const { Hotel } = require('../app/models');

async function insertHotel({name, email,phone, address}){
    return await Hotel.create({
        name,
        email,
        phone,
        address
    })
}

async function getHotelById(id){
    return await Hotel.findOne({
        where: {
            id
        }
    });
}

async function getAllHotels(){
    return await Hotel.findAll({
        order: [["name", "ASC"]],
    });
}

async function editHotel(){
    console.log("Implementar se precisar");
}

async function deleteHotel(){
    console.log("Implementar se precisar");
}




module.exports = {
    insertHotel,
    getHotelById,
    getAllHotels,
    editHotel,
    deleteHotel
}