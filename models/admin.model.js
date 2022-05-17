const mongoose =  require("mongoose");
const jwt = require('jsonwebtoken')
const schema = new mongoose.Schema({
        first_name:{
            type:String,
            required:true,
        },
        last_name:{
            type:String,
            required:true,
        },
        email:{
            type:String,
            required:true,
        },
        password:{
            type:String,
            required:true,   
            
        },
        role:{
            type:String,
            default:"admin",
            enum:['admin','subAdmin']
        },
        tokens:[
            {
            token:{
                type:String,
                required:true
            }
            }
        ]
        
});

schema.methods.generateAuthToken = async function(){
    try{
        let token = jwt.sign({_id:this._id},'KEy')
        this.tokens = this.tokens.concat({token:token})
        await this.save()
        return token
    }catch(err){
        console.log(err)
    }
}

module.exports = mongoose.model("admin",schema);