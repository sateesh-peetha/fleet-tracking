var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var helmet = require("helmet");

var vehicle_routes = require('./routes/vehicle');
var location_routes = require('./routes/vehicle_location');

var app = express();

app.use(helmet());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/vehicle', vehicle_routes);
app.use('/location',location_routes)

app.use((req, res) => {
    res.status(404).send('404: Page not found');
});

module.exports = app;
