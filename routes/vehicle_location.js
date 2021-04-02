const { Router } = require('express');
const location = require('../controllers/vehicle_location');
const router = Router();

router.get('/:id', location.findAll);
router.post('/update', location.updateLocation);


module.exports = router;