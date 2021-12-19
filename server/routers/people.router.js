const express = require('express');
const { listPeople } = require('../controllers/people.controller');
const { authenticate } = require('../middlewares/authen');

const peopleRouter = express.Router();

peopleRouter.get('/danh-sach-dan-so', authenticate, listPeople);

module.exports = {
    peopleRouter
}