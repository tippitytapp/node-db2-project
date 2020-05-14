const express = require('express');
const Sales = require('../data/dbConfig.js');
const {validateSaleEntry, validateSaleID} = require('../api/MiddleWare.js')
const router = express.Router();

router.get('/', (req, res) => {
    Sales('sale')
    .then(Sales => {
        res.status(200).json({
            data: Sales})
    })
    .catch(error => {
        res.status(500).json({
            errorMessage: "Error retrieving Sales",
            error
        })
    })
})

router.post('/', validateSaleEntry, (req, res)=>{
    const sale = req.body;
    Sales.insert(sale, 'id')
        .into('sale')
        .then(id => {
            if(id){
                res.status(201).json({
                    data: id,
                    message: "sale added successfully"
                })
            }
        })
        .catch(error => {
            res.status(500).json({
                error
            })
        })
})

router.get('/:id', validateSaleID, (req, res) => {
    Sales('sale')
        .where({id: req.params.id})
        .first()
        .then(sale => {
            res.status(200).json({
                data: sale
            })
        })
        .catch(error => {
            res.status(500).json({
                errorMessage: "Error retrieving sale from database",
                error
            })
        })
})

router.put('/:id', validateSaleID, validateSaleEntry, (req, res) => {
    const sale = req.body;
    Sales('sale')
        .where({id: req.params.id})
        .update(sale, 'id')
        .then(count=> {
            if (count > 0){
                res.status(200).json({
                    recordsUpdated: count,
                    statusMessage: "Record Updated Successfully"
                })
            }else{
                res.status(500).json({
                    errorMessage: "Could not update sale information"
                })
            }
        })
        .catch(error => {
            res.status(500).json({
                errorMessage: "Could not update sale information",
                error
            })
        })
})

router.delete('/:id', validateSaleID, (req, res) => {
    Sales('sale')
        .where({id: req.params.id})
        .first()
        .del()
        .then(count => {
            if(count > 0){
                res.status(200).json({
                    deletedCount: count,
                    statusMessage: "sale successfully deleted"
                })
            } else {
                res.status(500).json({
                    errorMessage: "Error deleting sale"
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