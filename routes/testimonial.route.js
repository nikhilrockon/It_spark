const express = require('express');
const testimonialController = require('../controller/testimonial.controller');

const router = express.Router();

router.post('/addtestimonial',testimonialController.addTestimonial);
router.patch('/edittestimonial/:id',testimonialController.editTestimonial);
router.delete('/deltestimonial/:id',testimonialController.delTestimonial);


module.exports = router;