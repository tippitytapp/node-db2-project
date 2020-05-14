const express = require('express');
const Cars = require('../data/dbConfig.js');
const {validateCarEntry, validateCarID} = require('../api/MiddleWare.js')
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

router.post('/', validateCarEntry, (req, res)=>{
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

router.get('/:id', validateCarID, (req, res) => {
    Cars('cars')
        .where({id: req.params.id})
        .first()
        .then(car => {
            res.status(200).json({
                data: car
            })
        })
        .catch(error => {
            res.status(500).json({
                errorMessage: "Error retrieving car from database",
                error
            })
        })
})

router.put('/:id', validateCarID, validateCarEntry, (req, res) => {
    const car = req.body;
    Cars('cars')
        .where({id: req.params.id})
        .update(car, 'id')
        .then(count=> {
            if (count > 0){
                res.status(200).json({
                    recordsUpdated: count,
                    statusMessage: "Record Updated Successfully"
                })
            }else{
                res.status(500).json({
                    errorMessage: "Could not update car information"
                })
            }
        })
        .catch(error => {
            res.status(500).json({
                errorMessage: "Could not update car information",
                error
            })
        })
})

router.delete('/:id', validateCarID, (req, res) => {
    Cars('cars')
        .where({id: req.params.id})
        .first()
        .del()
        .then(count => {
            if(count > 0){
                res.status(200).json({
                    deletedCount: count,
                    statusMessage: "Car successfully deleted"
                })
            } else {
                res.status(500).json({
                    errorMessage: "Error deleting car"
                })
            }
        })
        .catch(error => {
            res.status(500).json({
                errorMessage: "Error deleteing record from database",
                error
            })
        })
})

module.exports = router;