const express = require('express');
const adminController = require('../controller/admin.controller');
const router = express.Router();

router.post('/login',adminController.login);
router.post('/signup',adminController.signup);
router.delete('/:id',(req,res)=>{
    
});

router.patch('/:id',(req,res)=>{
    
});

module.exports = router;