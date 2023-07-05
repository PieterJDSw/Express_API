const User = require("../User")
const express = require('express')
const router = express.Router()

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})
// Get all users
router.get('/', async (req, res) => {
    const person = await User.find({});
  res.send(person)
})
// Get by ID
router.get('/:userId', async (req, res) => {
    let userId = request.params.userId
    const user = await User.findById(userId)
    res.send(user)
})
router.post('/', async (req, res) => {
    let user = request.body
    User.create(user)
    res.send("User Created")
})

module.exports = router