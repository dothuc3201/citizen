const express = require('express');
const { getListProvince, getListDistrict, getListWard, getListVillage, createAddress, getAddress } = require('../controllers/address.controller');
const { authenticate } = require('../middlewares/authen');

const addressRouter = express.Router();
//lấy địa chỉ dựa theo tên đăng nhập

//lấy danh sách tỉnh với đường link http://localhost:3001/api/address/provinces
addressRouter.get('/provinces', getListProvince);
//lấy danh sách quận, huyện theo mã tỉnh
addressRouter.get('/districts/:code', getListDistrict);
//lấy danh sách xã, phường theo mã quận, huyện 
addressRouter.get('/wards/:code', getListWard);
//lấy danh sách thôn theo mã xã, phường
addressRouter.get('/villages/:code', getListVillage);
//khai báo mã địa phương quản lý với đường link http://localhost:3001/api/address/create-address
addressRouter.post('/create-address', authenticate, createAddress);
//láy địa chỉ chi tiết dựa trên account
addressRouter.get('/get-address', authenticate, getAddress);
module.exports = {
    addressRouter
}