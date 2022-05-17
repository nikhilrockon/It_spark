const express = require("express");
const app = express();
const mongoose = require("mongoose");
const adminRoutes = require('./routes/admin.routes');
const testimonialRoutes = require('./routes/testimonial.route')
const blog = require('./routes/blogRoute')
const jobopening = require('./routes/carrersRoute')
const contactdetails = require('./routes/contactRoute')
const question = require('./routes/faqRoute')
const service = require('./routes/serviceRoute')
const team = require('./routes/teamRoute')
mongoose.connect('mongodb://localhost:27017/itspark');
mongoose.connection.on('error', err => {
    console.log(err);
  });

  app.use(express.json());
app.use('/admin',adminRoutes);
app.use('/blog',blog)
app.use('/job',jobopening)
app.use('/contact',contactdetails)
app.use('/question',question)
app.use('/service',service)
app.use('/team',team)
//testimonial
app.use('/testimonial',testimonialRoutes);



const jwt = require("jsonwebtoken");




app.listen(2100,()=>{
    console.log("Tumse ho payega?");
});

// http://localhost:2100/admin/login post 