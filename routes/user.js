const express = require('express')
const users = require('../models/users')
const router = express.Router()
const Users = require('../models/users')

router.get('/', async(req,res) => {
    try{
            const user = await Users.find()
            res.json(user)
    }catch(err) {
        res.send('Error ' + err)
    }
}) 

router.get('/:id', async(req,res) => {
    try{
            const user = await Users.findById(req.params.id)
            res.json(user)
    }catch(err) {
        res.send('Error ' + err)
    }
}) 

router.post('/', async(req,res) => {
    const users = new Users({
        Firstname: req.body.Firstname,
        Lastname: req.body.Lastname,
        Email: req.body.Email,
        Age: req.body.Age,
        City: req.body.City
    })

    try {
        const a1 = await users.save()
        res.json(a1)
        
    } catch (err){
         res.send('Error')
    }
})

router.patch('/:id', async(req,res) => {
    try{
            const users = await Users.findByIdAndUpdate(req.params.id, req.body)
            const a1 = await users.save()
            res.json(a1)
    }catch(err) {
        res.send('Error ')
    }   
}) 


router.delete('/:id', async(req,res) => {
    try{
            const user = await Users.findByIdAndDelete(req.params.id)
            res.json(user)
    }catch(err) {
        res.send('Error ')
    }
}) 

// endpoint that returns all users by age
router.get('/Age/:Age', async(req,res) => {
    try{
            const user = await Users.find({Age:req.params.Age})
            res.json(user)
    }catch(err) {
        res.send('Error ' + err)
    }
}) 

// endpoint that returns all users by city
router.get('/City/:City', async(req,res) => {
    try{
            const user = await Users.find({City:req.params.City})
            res.json(user)
    }catch(err) {
        res.send('Error ' + err)
    }
}) 

module.exports = router