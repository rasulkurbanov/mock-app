const express = require('express')
const router = express.Router()


//@route POST api/contacts
//@desc Register a contact
//@access Private
router.get('/', (req, res) => {
  res.send(`Get contacts of logged user`)
})


module.exports = router

