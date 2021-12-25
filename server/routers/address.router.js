const express = require('express');
const { createAddress, getAddress, getListAddress } = require('../controllers/address.controller');
const { authenticate } = require('../middlewares/authen');

const addressRouter = express.Router();
//lấy địa chỉ dựa theo tên đăng nhập

//lấy danh sách tỉnh với đường link http://localhost:3001/api/address/provinces
addressRouter.get('/get-list-address/:code',authenticate ,getListAddress);
//khai báo mã địa phương quản lý với đường link http://localhost:3001/api/address/create-address
addressRouter.post('/create-address', authenticate, createAddress);
//láy địa chỉ chi tiết dựa trên account
addressRouter.get('/get-address', authenticate, getAddress);
module.exports = {
    addressRouter
}