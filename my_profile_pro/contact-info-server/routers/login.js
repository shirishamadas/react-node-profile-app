const {addAdmin} = require('../controllers/login');

const express = require('express');

const router = express. Router();

router.post('/login', addAdmin);

module.exports = router;