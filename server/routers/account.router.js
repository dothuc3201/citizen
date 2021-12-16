const express = require('express');
const { loginAccount, createAccount } = require('../controllers/account.controller');
const { authenticate } = require('../middlewares/authen');

const accountRouter = express.Router();

accountRouter.post('/login', loginAccount);
accountRouter.post('/create', authenticate, createAccount);
accountRouter.get('/', (req, res)=> res.send('oke'));

module.exports = {accountRouter}