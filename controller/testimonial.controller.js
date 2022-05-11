const testimonial_model = require("../models/testimonial.model");


//Add Testimonial
async function addTestimonial(req,res){
    try {
        
      const testimonial = await testimonial_model.create({
            name:req.body.name,
            description:req.body.description,
            post:req.body.post,
            image_url:req.body.image_url
        });
        res.status(201).json({
            status:"success",
            message:"Testimonial added succesfully",
            data:testimonial
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status:"error",
            message:error.message,
        });
    }
};


//Edit Testimonial
async function editTestimonial(req,res){
    try {
        
    const edit_testimonial =  await testimonial_model.findById(req.params.id).update 
    ({
            name:req.body.name,
            description:req.body.description,
            post:req.body.post,
            image_url:req.body.image_url
        });
        res.status(200).json({
            status:"success",
            message:"Testimonial edited succesfully",
            data:edit_testimonial
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status:"error",
            message:error.message,
        });
    }
};



//Delete Testimonial

async function delTestimonial(req,res){
    try {
    
    const del_testimonial =  await testimonial_model.findByIdAndRemove(req.params.id)
   
        res.status(200).json({
            status:"success",
            message:"Testimonial deleted succesfully",
            data:del_testimonial
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status:"error",
            message:error.message,
        });
    }
};

  



module.exports = {
    addTestimonial,
    editTestimonial,
    delTestimonial
}

