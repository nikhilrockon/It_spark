const mongoose = require ("mongoose");


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
        },

        posted_by:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"admin",
        },
        reaction:{
            type:String,
        },

},{
    timestamps:true
});

module.exports = mongoose.model("blog",schema);