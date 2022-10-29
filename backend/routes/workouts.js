const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.json({mssg: 'GET all workouts'})
})

//GET a single workout | Postman Testing = Success 
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET single workout'})
})

//POST new workout | Postman Testing = Success
router.post('/', (req, res) => {
    res.json({mssg: 'POST a new workout'})
})

//DELETE a workout | Postman Testing = Success
router.post('/:id', (req, res) => {
    res.json({mssg: 'DELETE a new workout'})
})

//UPDATE a workout | Postman Testing = Success
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a new workout'})
})

module.exports = router