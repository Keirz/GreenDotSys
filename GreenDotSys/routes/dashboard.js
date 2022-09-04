const express = require('express');
const router = express.Router();

const {getAllMeasurements} = require('../models/measurement');

router.get('/teste_measurement',  async (req, res) => {
    const measurements = await getAllMeasurements();
    res.json(measurements);
  });


router.get('/:hotelId', async (req, res) => {
   
    const {id} = req.query;
    // const hotel = await getHotelById(id);
    const parameters= {

    }
    res.render('dashboard', parameters)
})

// tem q ser a ultima
router.get('/', async (req, res) => {
   
    const parameters= {
        hotel:{
            name: 'DEMO',
            email: 'demo@demo.com'
        }
    }
    res.render('dashboard', parameters)
})

module.exports = router;

