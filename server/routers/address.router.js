const express = require('express');
const { authenticate } = require('../middlewares/authen');

const addressRouter = express.Router();



module.exports = {
    addressRouter
}