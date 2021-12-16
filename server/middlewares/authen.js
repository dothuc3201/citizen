const{Account} = require('../models');
const jwt = require('jsonwebtoken');

const authenticate = async (req, res, next) => {
    try {
        const token = req.header("token");
        const decode = jwt.verify(token, "pikachu");
        const account = await Account.findOne({
            where:{
                username: decode.username,
            }
        });
        if (account){
            req.account = account;
            next();
        }
        else{res.status(500).send({message:decode});}
    } catch (error) {
        res.status(500).send({message:"bạn cần đăng nhập"});
    }
}

module.exports = {
    authenticate
}