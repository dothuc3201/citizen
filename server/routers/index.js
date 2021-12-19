const express = require('express');

const {accountRouter} = require('./account.router');
const {addressRouter} = require('./address.router');
const {peopleRouter} = require('./people.router')

const rootRouter = express.Router();

rootRouter.use('/account', accountRouter);
rootRouter.use('/address', addressRouter);
rootRouter.use('/people', peopleRouter);

module.exports = {rootRouter}