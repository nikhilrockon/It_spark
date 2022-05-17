const multer = require('multer')
const express = require('express')
const { isAuthenticatedUser } = require('../auth/auth')
const { addJobOpening, editJobOpening, delJobOpening } = require('../controller/carrers.controller')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
    
        cb(null, file.originalname)
    }
  })
  const upload = multer({
    storage: storage
  })
const router = express.Router()

router.post('/addjobopening',upload.single('attach_resume'),isAuthenticatedUser,addJobOpening)
router.patch('/updatejobopening/:id',isAuthenticatedUser,editJobOpening)
router.delete('/deletejobopening/:id',isAuthenticatedUser,delJobOpening)

module.exports=router