const db = require('../models');
const { Vehicle } = db;


const getPagination = (page, size) => {
  const limit = size ? +size : 3;
  const offset = page ? page * limit : 0;

  return { limit, offset };
};

const getPagingData = (data, page, limit) => {
  const { count: totalItems, rows: vehicles } = data;
  const currentPage = page ? +page : 0;
  const totalPages = Math.ceil(totalItems / limit);

  return { totalItems, vehicles, totalPages, currentPage };
};


// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const { page, size, title } = req.query;

  const { limit, offset } = getPagination(page, size);

  Vehicle.findAndCountAll({ limit, offset })
    .then(data => {
      const response = getPagingData(data, page, limit);
      res.send(response);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};


exports.getVehicle = async (req, res) => {
  const { id } = req.params;

  const vehicle = await Vehicle.findOne({
    where: {
      id,
    },
  });

  if (!vehicle) {
    return res.status(400).send({
      message: `No vehicle found with the id ${id}`,
    });
  }

  return res.send(vehicle);
};

exports.registerVehicle = async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).send({
      message: 'Please provide a name of the vehicle',
    });
  }

  let vehicleExists = await Vehicle.findOne({
    where: {
      name,
    },
  });

  if (vehicleExists) {
    return res.status(400).send({
      message: 'Vehicle is already registered!',
    });
  }

  try {
    let newVehicle = await Vehicle.create({
      name,
    });
    return res.send(newVehicle);
  } catch (err) {
    return res.status(500).send({
      message: `Error: ${err.message}`,
    });
  }
};

exports.deleteVehicle = async (req, res) => {
  const { id } = req.body;
  if (!id) {
    return res.status(400).send({
      message: 'Please provide a id for the vehicle you are trying to delete!',
    });
  }

  const vehicle = await Vehicle.findOne({
    where: {
      id,
    },
  });

  if (!vehicle) {
    return res.status(400).send({
      message: `No vehicle found with the id ${id}`,
    });
  }

  try {
    await vehicle.destroy();
    return res.send({
      message: `Vehicle ${id} has been deleted!`,
    });
  } catch (err) {
    return res.status(500).send({
      message: `Error: ${err.message}`,
    });
  }
};

exports.updateVehicle = async (req, res) => {
  const { name } = req.body;
  const { id } = req.params;

  const vehicle = await Vehicle.findOne({
    where: {
      id,
    },
  });

  if (!vehicle) {
    return res.status(400).send({
      message: `No vehicle found with the id ${id}`,
    });
  }

  try {
    if (name) {
      vehicle.name = name;
    }

    vehicle.save();
    return res.send({
      message: `Vehicle ${id} has been updated!`,
    });
  } catch (err) {
    return res.status(500).send({
      message: `Error: ${err.message}`,
    });
  }
};