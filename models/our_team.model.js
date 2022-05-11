const mongoose = require("mongoose");

const schema = new mongoose.Schema({

            name:{
                type:String,
                required:true,
            },

            designation:{
                type:String,
                required:true,
            },

            social_links:{
                type:String,
            },

            image_url:{
                type:String,
                required:true,
            },


});

module.exports = mongoose.model("our_team",schema);