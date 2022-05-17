const express = require('express')
const { isAuthenticatedUser } = require('../auth/auth')
const { add_blog, edit_blog, del_blog } = require('../controller/blog.controller')
const router = express.Router()

router.post('/add',isAuthenticatedUser,add_blog)
router.patch('/update/:id',isAuthenticatedUser,edit_blog)
router.delete('/delete/:id',isAuthenticatedUser,del_blog)
module.exports = router