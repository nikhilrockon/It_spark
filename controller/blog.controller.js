const blog_model = require("../models/blog.model");

async function add_blog(req,res){
    try{
        const {title,description,image_url,reaction} = req.body

        const newBlog = await blog_model.create({
            title:title,description:description,image_url:image_url,posted_by:req.admin._id,reaction:reaction
        })
        res.json(newBlog)
    }catch(err){
        console.log(err)
    }
   
};

async function edit_blog(req,res){
    const updatedblog={title:req.body.title,description:req.body.description,image_url:req.body.image_url,reaction:req.body.reaction}
    const updateBlog = await blog_model.findByIdAndUpdate(req.params.id,{...updatedblog},{new:true})
    res.json(updateBlog)
};

 async function del_blog(req,res){
    const deleteblog = await blog_model.findByIdAndRemove(req.params.id)
    res.json(deleteblog)
};

module.exports = {

    add_blog,
    edit_blog,
    del_blog

}