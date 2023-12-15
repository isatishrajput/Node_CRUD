const User = require('../models/user')

async function getAllUser(req,res){
    const allUsers = await User.find({})
    res.setHeader("X-myName","Satish Rajput"); // CUSTOM HAADER
    res.json(allUsers)
}

async function allGetUser(req,res){
    const user = await User.findById(req.params.id)
    if(!user){ res.status(404).json({error: "Request Not Found!!"})}
    res.json(user)
    
}

async function allPatchUser(req,res){
    const body = req.body
    await User.findByIdAndUpdate(req.params.id, {last_name: body.last_name})
    res.status(201).json({msg: "updated"})
}

async function allDeleteUser(req,res){
    await User.findByIdAndDelete(req.params.id)
    res.status(201).json({msg: "Deleted"})
}

async function allPostUser(req,res){
        const body = req.body
        if(!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title) 
        {
            res.status(400).json({msg : "All fields are req..."})
        }
        
        await User.create({
            first_name:body.first_name,
            last_name: body.last_name,
            email:body.email,
            jobTitle: body.jobTitle,
            gender: body.gender,
        });
        
    res.status(201).json({ msg: "Success"});
}

module.exports = {
    getAllUser,
    allGetUser,
    allPatchUser,
    allDeleteUser,
    allPostUser
}

