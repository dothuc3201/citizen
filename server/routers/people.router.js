const express = require('express');
const {totalPeople, listPeopleById, createPeople, updatePeople, deletePeople, getDetailPeople } = require('../controllers/people.controller');
const { authenticate } = require('../middlewares/authen');

const peopleRouter = express.Router();

//danh sách dân số theo mã vùng
peopleRouter.get('/danh-sach-dan-so', authenticate, listPeopleById);
//thêm dân cư quê quán, thường trú, tạm trú
peopleRouter.post('/them-dan-so', authenticate, createPeople);

peopleRouter.put('/chinh-sua-thong-tin', authenticate, updatePeople);
peopleRouter.delete('/xoa-dan-cu', authenticate, deletePeople);
//tổng dân số các vùng account quản lý
peopleRouter.get('/phan-tich-dan-so', authenticate, totalPeople);
peopleRouter.get('/thong-tin-chi-tiet:cccd', authenticate, getDetailPeople);

module.exports = {
    peopleRouter
}