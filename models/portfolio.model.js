const mongoose = require("mongoose");

const schema = new mongoose.Schema({

        title:{
            type:String,
            required:true,
        },

        description:{
            type:String,
            required:true,
        },

        image_url:{
            type:String,
            required:true,
        },

        technology:{
            type:String,
            required:true,
        },

        time_taken:{
            type:String,
            required:true,
        },

        team:{
            type:[{type:mongoose.Schema.Types.ObjectId,ref:'our_team'}],
            requiredt:true,
        },

});

module.exports = mongoose.model("portfolio",schema);