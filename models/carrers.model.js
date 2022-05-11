const mongoose = require("mongoose");

const schema = new mongoose.Schema({

        job_title:{
            type:String,
            required:true,
        },

        job_description:{
            type:String,
            required:true,
        },

      
        experience:{
            type:String,
            required:true,
        },

        attach_resume:{
                type:String,
                required:true,
        }

});

module.exports = mongoose.model("carrers",schema);