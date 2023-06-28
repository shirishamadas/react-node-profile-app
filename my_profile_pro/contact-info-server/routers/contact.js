const {addContact, getContact} = require('../controllers/contact');

const express = require('express');

const router = express. Router();

router.get('/read', getContact);

router.post('/create', addContact);

module.exports = router;