const { Guest } = require('../app/models');

async function insertGuest({}){
    return await Guest.create({
       
    })
}

async function getGuestById(id){
    return await Guest.findOne({
        where: {
            id
        }
    });
}

async function getAllGuests(){
    return await Guest.findAll({
        order: [["name", "ASC"]],
    });
}

async function editGuest(){
    console.log("Implementar se precisar");
}

async function deleteGuest(){
    console.log("Implementar se precisar");
}




module.exports = {
    insertGuest,
    getGuestById,
    getAllGuests,
    editGuest,
    deleteGuest
}