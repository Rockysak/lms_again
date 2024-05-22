const express = require('express');
const registeruser = require('../controllers/registercontroller');

require('../controllers/registercontroller');

const registerrouter = express.Router();

registerrouter.post('/registersignup',registeruser);

module.exports = registerrouter;