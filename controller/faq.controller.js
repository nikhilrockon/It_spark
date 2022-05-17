const faq_model = require("../models/faq.model");

async function addQuestion(req,res){
    const {question,answer} = req.body
    const createquestion = await faq_model.create({question,answer})
    res.json(createquestion)
};



async function editQuestion(req,res){
    const updatequestion = {
        question:req.body.question,
        answer:req.body.answer
    } 
    const updatedquestion = await faq_model.findByIdAndUpdate(req.params.id,{...updatequestion},{new:true})
    res.json(updatedquestion)
};


async function delQuestion(req,res){
    const deletequestion = await faq_model.findByIdAndRemove(req.params.id)
    res.json(deletequestion)
};




module.exports = {
    addQuestion,
    editQuestion,
    delQuestion,
}