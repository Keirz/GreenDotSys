const express = require('express');
const router = express.Router();



router.get('/:hotelId', async (req, res) => {
   
    const {id} = req.query;
    // const hotel = await getHotelById(id);
    const parameters= {

    }
    res.render('sign-in', parameters)
})

router.get('/', async (req, res) => {
   
    const parameters= {
        hotel:{
            name: 'DEMO',
            email: 'demo@demo.com'
        }
    }
    res.render('sign-in', parameters)
})

module.exports = router;

