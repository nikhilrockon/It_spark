const admin_model= require("../models/admin.model");

async function login(req,res){
    const {email,password} = req.body
    const admin  = await admin_model.findOne({
        email:email
    });
    if(!admin){
        res.json('user not fount')
    }else{
        let token = await admin.generateAuthToken()
        res.json({
            token:token
        })
    }
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
        const newUser = await admin_model.create({
            first_name:first_name,
            last_name:last_name,
            email:email,
            password:password
        })
         res.json(newUser);
       
    }
    //end
    console.log(req.query)

}

module.exports = {
    login,
    signup
}


