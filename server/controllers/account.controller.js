const{Account} = require('../models');
const jwt = require('jsonwebtoken');
const { Op } = require("sequelize");

//đăng nhập
const loginAccount = async (req, res) =>{
    const{username, password}=req.body;
    try {
        const loginAccount = await Account.findOne({
            where:{
                username,
                password
            }
        });
        if(loginAccount){
            //console.log(loginAccount)
            const token = jwt.sign({username, role_id:loginAccount.role_id}, "pikachu", {expiresIn: 7 * 24 * 60 * 60});
            // console.log(token);
            res.send({message:"đăng nhập thành công", token, username, status:loginAccount.status});
        }else{
            res.send({message:"tên đăng nhập hoặc mật khẩu không đúng"});
        }
    }
    catch(error){
        res.status(500).send({message:error})
    }
}

//cấp tài khoản
const createAccount = async (req, res) =>{
    //console.log(req.account);
    const {username, password} = req.body;
    try {
        const newAccount = await Account.create({username, password, status:1, role_id:req.account.role_id+1});
        if(newAccount){
            res.send({message:"tạo tài khoản thành công"})
        }else{
            res.send({message:"có lỗi xảy ra!"})
        }
    } catch (error) {
        res.send({message:error})
    }
}

//đổi mật khẩu
const changePassword = async (req, res) => {
    const {newPassword} = req.body;
    try {
        //const updateAccount = req.account;
        await Account.update({password:newPassword},{
            where:{
                username:req.account.username
            }
        })
    } catch (error) {
        res.send({message:error})
    }
}

//chỉnh sửa quyền khai báo
const changePermission = async (req, res) =>{
    const {username} = req.params;
    try {
        const permissionAccount = await Account.findOne({
            where:{
                username
            }
        });
        const status = !permissionAccount.status;
        await Account.update({status},{
            where:{
                username:{
                    [Op.like]: username + '%'
                }
            }
        });
        const changeAccount = await Account.findOne({
            where:{
                username
            }
        });
        res.send({message:"đã thay đổi quyền chỉnh sửa", changeAccount});
    } catch (error) {
        res.send({message:error})
    }
}

//lấy danh sách các tài khoản dưới quyền 
const getAccount = async (req, res) => {
    try {
        if (req.account.role_id == 1){
            const listAccount = await Account.findAll({
                where:{
                    role_id:2
                }
            })
            res.send({message:'thành công', listAccount})
        }
        else{
            const listAccount = await Account.findAll({
                where:{
                    username:{
                        [Op.like]: `${req.account.username}%`
                    },
                    role_id:req.account.role_id + 1
                }
            })
            res.send({message:'thành công', listAccount})
        }
    } catch (error) {
        res.send({message:error})
    }
}

module.exports = {
    loginAccount,
    createAccount,
    changePassword,
    changePermission,
    getAccount
}