const mongoose = require("mongoose");

const schema = new mongoose.Schema({

            service_name:{
                type:String,
                required:true,
            },

            order:{
                type:String,
                required:true,
            },

            logo_url:{
                type:String,
                required:true,
            },

});

module.exports = mongoose.model("our_services",schema);