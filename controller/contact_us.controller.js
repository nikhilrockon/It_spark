const contact_model = require("../models/contact_us.model");

async function addContactDetail(req,res){
    const{name,email,phone,subject,message} = req.body
    const contactDetails = await contact_model.create({
        name,email,phone,subject,message
    })
    res.json(contactDetails) 
};
async function editContactDetail(req,res){
   const updatecontactusdetail={
       name:req.body.name,
       email:req.body.email,
       phone:req.body.phone,
       subject:req.body.subject,
       message:req.body.message
   }
   const updatedContactdetail= await contact_model.findByIdAndUpdate(req.params.id,{...updatecontactusdetail},{new:true})
   res.json(updatedContactdetail)
};



async function deleteContactDetail(req,res){
        const deletecontactdetail = await contact_model.findByIdAndRemove(req.params.id)
        res.json(deletecontactdetail)
};

module.exports ={
    addContactDetail,
    editContactDetail,
    deleteContactDetail

}
