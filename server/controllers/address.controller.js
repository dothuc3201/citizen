const{Account, Province, District, Ward, Village} = require('../models');

//lấy danh sách các tỉnh thành
const getListAddress = async (req, res) => {
    try {
        if (req.account.role_id == 1){
            const listProvince = await Province.findAll({});
            if(listProvince){
                res.send({messsage:"thành công", listProvince});
            }else{
                res.send({messsage:"thất bại"});
            }
        }
        if (req.account.role_id == 2){
            const code = req.params.code;
            const listDistrict = await District.findAll({
                where:{
                    province_code:code
                }
            });
            if(listDistrict){
                res.send({messsage:"thành công", listDistrict});
            }else{
                res.send({messsage:"thất bại"});
            }
        } 
        if (req.account.role_id == 3){
            const code = req.params.code;
            const listWard = await Ward.findAll({
                where:{
                    district_code:code
                }
            });
            if(listWard){
                res.send({messsage:"thành công", listWard});
            }else{
                res.send({messsage:"thất bại"});
            }
        } 
        if (req.account.role_id == 4){
            const code = req.params.code;
            const listVillage = await Village.findAll({
                where:{
                    ward_code:code
                }
            });
            if(listVillage){
                res.send({messsage:"thành công", listVillage});
            }else{
                res.send({messsage:"thất bại"});
            }
        } 
    } catch (error) {
        res.send({messsage:error});
    }
}

//lấy danh sách quận huyện theo mã tỉn
//lấy danh sách xã, phường theo mã quận, huyện

//khai báo mã cho các địa phương
const createAddress = async (req, res) => {
    const {code, name} = req.body;
    try {
        if (req.account.role_id == 1){
            const newProvince = await Province.create({name, code});
            if (newProvince) {
                res.send({messsage:"tạo tỉnh thành công", newProvince})
            }else{
                res.send({messsage:"tạo thất bại"})
            }
        };
        if (req.account.role_id == 2){
            const province_code = req.account.username;
            const newDistrict = District.create({name, code, province_code});
            if (newDistrict) {
                res.send({messsage:"tạo huyện thành công", newDistrict})
            }else{
                res.send({messsage:"tạo thất bại"})
            }
        };
        if (req.account.role_id == 3){
            const district_code = req.account.username;
            const newWard = Ward.create({name, code, district_code});
            if (newWard) {
                res.send({messsage:"tạo xã thành công", newWard})
            }else{
                res.send({messsage:"tạo thất bại"})
            }
        };
        if (req.account.role_id == 4){
            const ward_code = req.account.username;
            const newVillage = Village.create({name, code, ward_code});
            if (newVillage) {
                res.send({messsage:"tạo thôn thành công", newVillage})
            }else{
                res.send({messsage:"tạo thất bại"})
            }
        };
    } catch (error) {
        res.send({messsage:error});
    }
}

//lấy địa chỉ theo tên đăng nhập
const getAddress = async (req, res) =>{
    const address = req.account.username;
    try {
        if (req.account.role_id == 1){
            const listProvince = await Province.findAll({});
            res.send({role_id:1, listProvince});
            console.log(listProvince);
        };
        if(req.account.role_id == 2){
            const addressDetail = await Province.findOne({
                where:{
                    code:address
                }
            });
            res.send({role_id:2, addressDetail});
        }
        if(req.account.role_id == 3){
            const addressDetail = await District.findAll({
                where:{
                    code:address
                },
                include:{
                    model: Province
                }
            });
            res.send({role_id:3, addressDetail});
        }
        if(req.account.role_id == 4){
            const addressDetail = await Ward.findAll({
                where:{
                    code:address
                },
                include:
                    {
                        model: District,
                        include:{
                            model:Province,
                        }
                    }               
            });
            res.send({role_id:4, addressDetail});
            
        };
        if(req.account.role_id == 5){
            const addressDetail = await Village.findAll({
                where:{
                    code:address
                },
                include:
                    {
                        model: Ward,
                        include:{
                            model:District,
                            include:{
                                model:Province
                            }
                        }
                    }               
            });
            res.send({role_id:5, addressDetail});
            
        }
    } catch (error) {
        res.send({messsage:error})
    }
}
module.exports = {
    getListAddress,
    createAddress,
    getAddress
}