const express = require('express')
const router = express.Router()


//@route GET api/auth
//@desc GET logged user
//@access Public
router.get('/', (req, res) => {
  res.send(`Get authenticated user`)
})


//@route POST api/auth
//@desc Register a user
//@access Public
router.post('/', (req, res) => {
  res.send(`Authenticate a user`)
})


module.exports = router

