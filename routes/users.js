const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const User = require('../models/User')
const { check, validationResult } = require('express-validator');



//@route POST api/users
//@desc Register a user
//@access Public
router.post('/',
  check('username').isString().not().isEmpty().isLength({ min: 5 }).withMessage('Username must be at least 5 characters'),
  check('email').isEmail().withMessage('Email must be valid'),
  check('password').isLength({min: 8}).withMessage('Password must contain at least 8 characters')
  , async (req, res) => {
    res.send(`Get logged in`)
    const { username, email, password } = req.body

    let salt = await bcrypt.genSalt(10)

    let user = new User({
      username,
      email,
      password
    })

    user.password = bcrypt.hash(password, salt)




  })



module.exports = router

