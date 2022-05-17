const services_model = require("../models/our_sevices.model");

async function addservices (req,res){
  const {service_name,order,logo_url}=req.body
    const createService = await services_model.create({service_name,order,logo_url})
    res.json(createService)
};

async function editServices (req,res){
  const updateservice ={
    service_name:req.body.service_name,
    order:req.body.order,
    logo_url:req.body.logo_url
  }
  const updatedservice = await services_model.findByIdAndUpdate(req.params.id,{...updateservice},{new:true})
  res.json(updatedservice)
};

async function deleteServices(req,res){
  const deleteservice = await services_model.findByIdAndRemove(req.params.id)
  res.json(deleteservice)
};

module.exports = {
    addservices,
    editServices,
    deleteServices
}