const admin_model= require("../models/admin.model");

function login(req,res){
    const admin  = admin_model.find({
        email:req.body.email
    });
    // admin_model.find();
}

async function signup(req,res){
    // console.log(req.body);
    //signup api by ankur khatri
    const {first_name,last_name,email,password}=req.body
    const adminexist =await admin_model.findOne({email:email})
    if(adminexist){
        res.status(400).json('this admin already exist')
    }else{
        await admin_model.create({
            first_name:first_name,
            last_name:last_name,
            email:email,
            password:password
        })
         res.send({req,res}); 
       
    }
    //end
    console.log(req.query)

}

module.exports = {
    login,
    signup
}


