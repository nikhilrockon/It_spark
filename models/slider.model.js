const mongoose = require ("mongoose");

const schema = new mongoose.Schema({

        title:{
            type:String,
            required:true,
        },

        subtitle:{
            type:String,
            required:true,
        },

        image_url:{
            type:String,
            required:true,
        },

        redirection_url:{
            type:String,
        },

        button_color:{
            type:String,
        },


});

module.exports = mongoose.model("slider",schema);