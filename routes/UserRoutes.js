const User = require("../User")
const express = require('express')
const router = express.Router()

// middleware that is specific to this router or add globally to be added to all routes
// Good example for this would be JWT authentication
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  res.set({
    'Server': "express",
    'Demo':"Entelect Tech talk"
    
  });
  next()
})
// Get all users
router.get('/', async (req, res) => {
    const person = await User.find({});
  res.send(person)
})
// Get by ID
router.get('/:userId', async (req, res) => {
    let userId = req.params.userId
    const user = await User.findById(userId)
    res.send(user)
})
router.post('/', async (req, res) => {
    let user = req.body
    User.create(user)
    res.send("User Created")
})

module.exports = router