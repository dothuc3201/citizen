const{Account, Province, District, Ward, Village, People} = require('../models');

//nhập thông tin người dân
const createPeople = async (req, res) =>{
    const {cccd,
           hoten, 
           ngaysinh, 
           gioitinh, 
           trinhdo, 
           nghenghiep,
           province_code_quequan,
           district_code_quequan,
           ward_code_quequan, 
           village_code_quequan,
           province_code_thuongtru,
           district_code_thuongtru,
           ward_code_thuongtru, 
           village_code_thuongtru,
           province_code_tamtru,
           district_code_tamtru,
           ward_code_tamtru, 
           village_code_tamtru} = req.body;
    try {
        const newPeople = await People.create({
            cccd,
           hoten, 
           ngaysinh, 
           gioitinh, 
           trinhdo, 
           nghenghiep,
           province_code_quequan,
           district_code_quequan,
           ward_code_quequan, 
           village_code_quequan,
           province_code_thuongtru,
           district_code_thuongtru,
           ward_code_thuongtru, 
           village_code_thuongtru,
           province_code_tamtru,
           district_code_tamtru,
           ward_code_tamtru, 
           village_code_tamtru
        });
        if(newPeople){
            res.send({message:"thêm thành công", newPeople})
        }else{
            res.send({message:"thất bại"})
        }
    } catch (error) {
        res.send({message:error})
    }
}

//lấy danh sách người dân theo mã tỉnh
const listPeople = async (req, res) =>{
    const {type, address} = req.query;
    try {
        if (type == 1){
            const listPeople = await People.findAll({
                where:{
                    village_code_quequan:{
                        [Op.like]:`${address}%`
                    }
                },
                include:{
                    model: Province,
                    model: District,
                    model: Ward,
                    model: Village
                }
            })
            res.send({message:'thành công', listPeople})
        }

    } catch (error) {
        res.send({message:error})
    }
}

module.exports = {
    createPeople,
    listPeople
}