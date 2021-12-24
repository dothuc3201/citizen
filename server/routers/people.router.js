const express = require('express');
const {totalPeople, listPeopleById, createPeopleQuequan, createPeopleThuongtru, createPeopleTamtru } = require('../controllers/people.controller');
const { authenticate } = require('../middlewares/authen');

const peopleRouter = express.Router();

//danh sách dân số theo mã vùng
peopleRouter.get('/danh-sach-dan-so', authenticate, listPeopleById);
//thêm dân cư quê quán, thường trú, tạm trú
peopleRouter.post('/them-dan-so-que-quan', authenticate, createPeopleQuequan);
peopleRouter.post('/them-dan-so-thuong-tru', authenticate, createPeopleThuongtru);
peopleRouter.post('/them-dan-so-tam-tru', authenticate, createPeopleTamtru);

//tổng dân số các vùng account quản lý
peopleRouter.get('/phan-tich-dan-so', authenticate, totalPeople);

module.exports = {
    peopleRouter
}