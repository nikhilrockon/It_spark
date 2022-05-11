const express = require("express");
const app = express();
const mongoose = require("mongoose");
const adminRoutes = require('./routes/admin.routes');
const testimonialRoutes = require('./routes/testimonial.route')

mongoose.connect('mongodb://localhost:27017/itspark');
mongoose.connection.on('error', err => {
    console.log(err);
  });

  app.use(express.json());
app.use('/admin',adminRoutes);

//testimonial
app.use('/testimonial',testimonialRoutes);



const jwt = require("jsonwebtoken");

const createToken = async() => {

      const token = await jwt.sign({_id:"62710510d3f6ba5481709e48"}, "mynameiskeshavsuman");
      console.log(token);

}

createToken();


app.listen(2100,()=>{
    console.log("Tumse ho payega?");
});

// http://localhost:2100/admin/login post 