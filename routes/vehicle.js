const { Router } = require('express');
const vehcile = require('../controllers/vehicle');
const router = Router();

router.get('/:id', vehcile.getVehicle);

router.post('/register', vehcile.registerVehicle);

router.post('/delete', vehcile.deleteVehicle);

router.post('/update/:id', vehcile.updateVehicle);

module.exports = router;