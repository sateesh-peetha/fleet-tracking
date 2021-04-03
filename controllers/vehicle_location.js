const db = require('../models');
const { Vehicle, Vehicle_location } = db;


const getPagination = (page, size) => {
    const limit = size ? +size : 3;
    const offset = page ? page * limit : 0;

    return { limit, offset };
};

const getPagingData = (data, page, limit) => {
    const { count: totalItems, rows: Vehicle_locations } = data;
    const currentPage = page ? +page : 0;
    const totalPages = Math.ceil(totalItems / limit);

    return { totalItems, Vehicle_locations, totalPages, currentPage };
};

exports.findAll = (req, res) => {
    const { page, size , fromDate, toDate} = req.query;
    const { id } = req.params;

    const { limit, offset } = getPagination(page, size);

    Vehicle_location.findAndCountAll({
        where: {
            vehicle_id: id,
            from: {
                $between: [fromDate, toDate]
            }
        }, limit, offset
    })
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


exports.updateLocation = async (req, res) => {
    const { id, lat, lang , registrationCode } = req.body;

    if (!id) {
        return res.status(400).send({
            message: 'Please provide a id of the vehicle to update',
        });
    }

    let vehicleExists = await Vehicle.findOne({
        where: {
            id: id,
            registrationCode: registrationCode
        },
    });

    if (!vehicleExists) {
        return res.status(400).send({
            message: 'Vehicle is not registers',
        });
    }

    try {
        let newLocation = await Vehicle_location.create({
            vehicle_id : id,
            latitude: lat,
            longitude: lang
        });
        return res.send(newLocation);
    } catch (err) {
        return res.status(500).send({
            message: `Error: ${err.message}`,
        });
    }
};

