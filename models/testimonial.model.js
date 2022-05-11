const mongoose = require ("mongoose");

const schema = new mongoose.Schema({

        name:{
            type:String,
            required:true,
        },

        description:{
            type:String,
            required:true,
        },

        post:{
            type:String,
            required:false,
        },

        image_url:{
            type:String,
            required:true,
        },

});

module.exports = mongoose.model("testimonial",schema);