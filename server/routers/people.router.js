const express = require('express');
const { listPeople, createPeople } = require('../controllers/people.controller');
const { authenticate } = require('../middlewares/authen');

const peopleRouter = express.Router();

peopleRouter.get('/danh-sach-dan-so', authenticate, listPeople);
peopleRouter.post('/them-dan-so', authenticate, createPeople)

module.exports = {
    peopleRouter
}