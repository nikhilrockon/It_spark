const express = require('express')
const { isAuthenticatedUser } = require('../auth/auth')
const { addservices, editServices, deleteServices } = require('../controller/our_services.controller')
const router = express.Router()

router.post('/addservice',isAuthenticatedUser,addservices)
router.patch('/updateservice/:id',isAuthenticatedUser,editServices)
router.delete('/deleteservice/:id',isAuthenticatedUser,deleteServices)
module.exports = router