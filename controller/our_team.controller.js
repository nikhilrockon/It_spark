const team_model = require("../models/our_team.model");

async function addTeam(req,res){
    const {name,designation,social_links,image_url} = req.body
    const createemployee = await team_model.create({
        name,designation,social_links,image_url
    })
    res.json(createemployee)
};

function editTeam(req,res){

};

function delTeam(req,res){

};

module.exports = {
    addTeam,
    editTeam,
    delTeam

}