const express = require('express');
const Cars = require('../data/dbConfig.js');
const {validateEntry} = require('../api/MiddleWare.js')
const router = express.Router();

router.get('/', (req, res) => {
    Cars('cars')
    .then(cars => {
        res.status(200).json({
            data: cars})
    })
    .catch(error => {
        res.status(500).json({
            errorMessage: "Error retrieving cars",
            error
        })
    })
})

router.post('/', validateEntry, (req, res)=>{
    const car = req.body;
    Cars.insert(car, 'id')
        .into('cars')
        .then(id => {
            if(id){
                res.status(201).json({
                    data: id,
                    message: "Car added successfully"
                })
            }
        })
        .catch(error => {
            res.status(500).json({
                error
            })
        })
})


module.exports = router;