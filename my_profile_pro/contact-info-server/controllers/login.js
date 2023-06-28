// const mongoose = require('mongoose');
const Admin = require('../models/login');

const addAdmin = (req,res) => {
    console.log('admindetails!!', req.body);
    let obj = new Admin({
        email: req.body.email,
        password: req.body.password
    })
    obj.save().then(() => {
        res.send({status:200, msg:"Admin email saved to database"});
        }).catch(() => {
            res.send({status:400, msg:"unable to save admin to database"});
        })
}

module.exports = { addAdmin }