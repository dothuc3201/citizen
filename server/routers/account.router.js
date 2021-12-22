const express = require('express');
const { loginAccount, createAccount, changePassword, getAccount, changePermission } = require('../controllers/account.controller');
const { authenticate } = require('../middlewares/authen');

const accountRouter = express.Router();

//chức năng đăng nhập với đường link http://localhost:3001/api/account/login
accountRouter.post('/login', loginAccount);
//khai báo tài khoản dưới quyền quản lý
accountRouter.post('/create', authenticate, createAccount);
//thay đổi mật khẩu
accountRouter.post('/change-password', authenticate, changePassword);
//lấy danh sách account dưới quyền
accountRouter.get('/account-cap-duoi', authenticate, getAccount);
//thay đổi quyền khai báo
accountRouter.post('/change-permission', authenticate, changePermission);

module.exports = {accountRouter}