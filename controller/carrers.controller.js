const carrers_modle = require("../models/carrers.model");

async function addJobOpening(req,res){
    const {job_title,job_description,experience} = req.body
    const attach_resume =req.file.originalname
    const newJobOpening = await carrers_modle.create({
        job_title,job_description,experience,attach_resume
    })
    res.json(newJobOpening)
};

async function editJobOpening(req,res){
    const updateJobOpening={
        job_title:req.body.job_title,
        job_description:req.body.job_description,
        experience:req.body.experience,
    }
    const updatedjobopening = await carrers_modle.findByIdAndUpdate(req.params.id,{...updateJobOpening},{new:true})
    res.json(updatedjobopening)
};

async function delJobOpening(req,res){
    const deletejobopening = await carrers_modle.findByIdAndRemove(req.params.id)
    res.json(deletejobopening)
};

module.exports = {
    addJobOpening,
    editJobOpening,
    delJobOpening

}