const mongoose = require("mongoose");

const schema = new mongoose.Schema({

    question:{  
        type:String,
        required:true,
        },

    answer:{
        type:String,
        required:true,
    },
    

});

module.exports = mongoose.model("faq",schema);