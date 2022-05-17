const express = require('express')
const { isAuthenticatedUser } = require('../auth/auth')
const { addContactDetail, editContactDetail, deleteContactDetail } = require('../controller/contact_us.controller')
const router = express.Router()
const contact_model = require('../models/contact_us.model')

router.post('/addcontactus',isAuthenticatedUser,addContactDetail)
router.patch('/updatecontactus/:id',isAuthenticatedUser,editContactDetail)
router.delete('/deletecontactus/:id',isAuthenticatedUser,deleteContactDetail)
module.exports = router