const Cars = require('../data/dbConfig.js')
const Sales = require('../data/dbConfig.js')

module.exports = {
    validateCarEntry,
    validateCarID,
    validateSaleID,
    validateSaleEntry
}

function validateCarEntry(req, res, next){
    const VIN = req.body.vin;
    const MAKE = req.body.make;
    const MODEL = req.body.model;
    const MILEAGE = req.body.mileage;
    if(!VIN || VIN.length === 16){
        res.status(400).json({
            errorMessage: "Please ensure you have added a 17 digit 'VIN'"
        })
    } else if (!MAKE){
        res.status(400).json({
            errorMessage: "Please ensure you have added a 'MAKE'"
        })
    } else if (!MODEL){
        res.status(400).json({
            errorMessage: "Please ensure you have added a 'MODEL'"
        })
    } else if (!MILEAGE || MILEAGE.length > 6 ) {
        res.status(400).json({
            errorMessage: "Please ensure you ahve added a valid 'MILEAGE"
        })
    } else {
        next();
    }
}

function validateCarID(req, res, next){
    Cars('cars')
        .where({id: req.params.id})
        .first()
        .then(car => {
            if(car){
                next();
            } else {
                res.status(404).json({
                    errorMessage: "No car matching that ID found"
                })
            }
        })
        .catch(error => {
            res.status(500).json({
                errorMessage: "Error retrieving car",
                error
            })
        })

}
function validateSaleID(req, res, next){
    Sales('sale')
        .where({id: req.params.id})
        .first()
        .then(sale => {
            if(sale){
                next();
            } else {
                res.status(404).json({
                    errorMessage: "No sale matching that ID found"
                })
            }
        })
        .catch(error => {
            res.status(500).json({
                errorMessage: "Error retrieving sale",
                error
            })
        })

}

function validateSaleEntry(req, res, next){
    const car = req.body.car;
    const customerName = req.body.customer_name;
    const phone = req.body.phone;
    const address = req.body.address;
    const city = req.body.city;
    const state = req.body.state;
    const zipcode = req.body.zipcode;
    if(!car){
        res.status(400).json({
            errorMessage: "Please ensure you have added a sold car"
        })
    } else if (!customerName){
        res.status(400).json({
            errorMessage: "Please ensure you have added a customer name"
        })
    } else if (!phone){
        res.status(400).json({
            errorMessage: "Please ensure you have added a phone"
        })
    } else if (!address){
        res.status(400).json({
            errorMessage: "Please ensure you have added a address"
        })
    } else if (!city){
        res.status(400).json({
            errorMessage: "Please ensure you have added a city"
        })
    } else if (!state) {
        res.status(400).json({
            errorMessage: "Please ensure you ahve added a valid state"
        })
    } else if (!zipcode){
        res.status(400).json({
            errorMessage: "Please ensure you have added a zipcode"
        })
    } else {
        next();
    }
}