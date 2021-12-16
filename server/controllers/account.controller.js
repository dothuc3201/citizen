const{Account} = require('../models');
const jwt = require('jsonwebtoken');

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
            res.send({message:"đăng nhập thành công", token});
        }else{
            res.send({message:"tên đăng nhập hoặc mật khẩu không đúng"});
        }
    }
    catch(error){
        res.status(500).send({message:error})
    }
}

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

const changePassword = async (req, res) => {
    const {newPassword} = req.body;
    try {
        const updateAccount = req.account;
        updateAccount.password = newPassword;
        await updateAccount.save();
    } catch (error) {
        res.send({message:error})
    }
}

const changePermission = async (req, res) =>{
    const {username} = req.body;
    try {
        const permissionAccount = await Account.findOne({
            where:{
                username
            }
        });
        const status = !permissionAccount.status;
        permissionAccount.status = status;
        permissionAccount.save();
    } catch (error) {
        res.send({message:error})
    }
}

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
                        [Op.like]: req.account.username + '%'
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