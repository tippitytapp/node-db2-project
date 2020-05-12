const Cars = require('../data/dbConfig.js')

module.exports = {
    validateEntry,
    validateID
}

function validateEntry(req, res, next){
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

function validateID(req, res, next){
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