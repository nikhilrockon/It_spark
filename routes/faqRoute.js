const express = require('express')
const { isAuthenticatedUser } = require('../auth/auth')
const { addQuestion, editQuestion, delQuestion } = require('../controller/faq.controller')
const router = express.Router()

router.post('/addquestion',isAuthenticatedUser,addQuestion)
router.patch('/updatequestion/:id',isAuthenticatedUser,editQuestion)
router.delete('/delete/:id',isAuthenticatedUser,delQuestion)
module.exports=router