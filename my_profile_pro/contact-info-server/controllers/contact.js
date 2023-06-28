const mongoose = require('mongoose');
const Contact = require('../models/contact');

const addContact = (req,res) => {
    console.log('addContact!!', req.body);
    let obj = new Contact({
        name: req.body.name,
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message
    })
    obj.save().then(() => {
        res.send({status:200, msg:"contact saved to database"});
        }).catch(() => {
            res.send({status:400, msg:"unable to save to database"});
        })
}

const getContact = (req,res) => {
    Contact.find().limit(10)
    .then((r) => res.send({status:200, response: r}))
    .catch((err) => res.send({status:400, response:err}))
}

module.exports = {
    addContact,
    getContact
}