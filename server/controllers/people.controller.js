const{Account, Province, District, Ward, Village, People_quequan, People_tamtru, People_thuongtru} = require('../models');
const { Op } = require("sequelize");
//nhập thông tin người dân
const createPeople = async (req, res) =>{
    const {cccd,
           hoten, 
           ngaysinh, 
           gioitinh, 
           tongiao,
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
        } = req.body;
    try {
        const peopleQuequan = await People_quequan.findAll({
            where:{
                cccd
            }
        });
        if (peopleQuequan) {
            await People_quequan.destroy({
                where: {
                  cccd
                }
              });
        };
        const newPeople_quequan = await People_quequan.create({
            cccd,
           hoten, 
           ngaysinh, 
           gioitinh,
           tongiao, 
           trinhdo, 
           nghenghiep,
           province_code_quequan,
           district_code_quequan,
           ward_code_quequan, 
           village_code_quequan,
        });
        const peopleThuongtru = await People_thuongtru.findAll({
            where:{
                cccd
            }
        });
        if (peopleThuongtru) {
            await People_thuongtru.destroy({
                where: {
                  cccd
                }
              });
        };
        const newPeople_thuongtru = await People_thuongtru.create({
            cccd,
           hoten, 
           ngaysinh, 
           gioitinh,
           tongiao, 
           trinhdo, 
           nghenghiep,
           province_code_thuongtru,
           district_code_thuongtru,
           ward_code_thuongtru, 
           village_code_thuongtru,
        });
        const peopleTamtru = await People_tamtru.findAll({
            where:{
                cccd
            }
        });
        if (peopleTamtru) {
            await People_tamtru.destroy({
                where: {
                  cccd
                }
              });
        };
        const newPeople_tamtru = await People_tamtru.create({
            cccd,
           hoten, 
           ngaysinh, 
           gioitinh,
           tongiao, 
           trinhdo, 
           nghenghiep,
           province_code_tamtru,
           district_code_tamtru,
           ward_code_tamtru, 
           village_code_tamtru
        });
        res.send({message:"thêm thành công", newPeople_quequan, newPeople_thuongtru, newPeople_tamtru})
    } catch (error) {
        res.send({message:error})
    }
}


//delete thông tin dân cư quê quán
const deletePeople = async (req, res) => {
    const {cccd} = req.body;
    try {
        const people = await People_quequan.findAll({
            where:{
                cccd
            }
        });
        if (people) {
            await People_quequan.destroy({
                where: {
                  cccd
                }
              });
        };
        res.send({message:"xóa thành công"})
    } catch (error) {
        res.send({message:error})
    }
}

const deletePeopleThuongtru = async (req, res) => {
    const {cccd} = req.body;
    try {
        const people = await People_thuongtru.findAll({
            where:{
                cccd
            }
        });
        if (people) {
            await People_thuongtru.destroy({
                where: {
                  cccd
                }
              });
        };
        res.send({message:"xóa thành công"})
    } catch (error) {
        res.send({message:error})
    }
}

const deletePeopleTamtru = async (req, res) => {
    const {cccd} = req.body;
    try {
        const people = await People_tamtru.findAll({
            where:{
                cccd
            }
        });
        if (people) {
            await People_tamtru.destroy({
                where: {
                  cccd
                }
              });
        };
        res.send({message:"xóa thành công"})
    } catch (error) {
        res.send({message:error})
    }
}

//update thông tin
const updatePeopleQuequan = async (req, res) =>{
    const {cccd,
        hoten, 
        ngaysinh, 
        gioitinh, 
        tongiao,
        trinhdo, 
        nghenghiep,
        province_code_quequan,
        district_code_quequan,
        ward_code_quequan, 
        village_code_quequan
     } = req.body;
     try {
        await People_quequan.update({ hoten, 
            ngaysinh, 
            gioitinh, 
            tongiao,
            trinhdo, 
            nghenghiep,
            province_code_quequan,
            district_code_quequan,
            ward_code_quequan, 
            village_code_quequan }, {
            where: {
              cccd
            }
          });
          res.send({message:"update thành công"})
     } catch (error) {
         res.send({message:error})
     }
}

//lấy danh sách người dân theo mã vùng
const listPeopleById = async (req, res) =>{
    const {type, address} = req.query;
    try {
        if (type == 1){
            const listPeople = await People_quequan.findAll({   
                where:{
                    village_code_quequan:{
                        [Op.like]:`${address}%`
                    }
                },             
                include:[
                    {
                        model: Province,
                    },
                    {
                        model: District,
                    },
                    {
                        model: Ward,
                    },
                    {
                        model: Village,
                    }
                ],
                order:['province_code_quequan','district_code_quequan','ward_code_quequan','village_code_quequan']
            })
            res.send({message:'thành công', listPeople})
        }
        if (type == 2){
            const listPeople = await People_thuongtru.findAll({   
                where:{
                    village_code_thuongtru:{
                        [Op.like]:`${address}%`
                    }
                },             
                include:[
                    {
                        model: Province,
                    },
                    {
                        model: District,
                    },
                    {
                        model: Ward,
                    },
                    {
                        model: Village,
                    }
                ],
                order:['province_code_quequan','district_code_quequan','ward_code_quequan','village_code_quequan']

            })
            res.send({message:'thành công', listPeople})
        }
        if (type == 3){
            const listPeople = await People_tamtru.findAll({   
                where:{
                    village_code_tamtru:{
                        [Op.like]:`${address}%`
                    }
                },             
                include:[
                    {
                        model: Province,
                    },
                    {
                        model: District,
                    },
                    {
                        model: Ward,
                    },
                    {
                        model: Village,
                    }
                ],
                order:['province_code_quequan','district_code_quequan','ward_code_quequan','village_code_quequan']

            })
            res.send({message:'thành công', listPeople})
        }
    } catch (error) {
        res.send({message:error})
    }
}

//tổng số dân từng vùng theo dưới sự quản lý của account
const totalPeople = async (req, res) =>{
    if (req.account.role_id == 1){
        const totalPeople = await People_quequan.findAndCountAll({
            attributes:['province_code_quequan'],
            group:'province_code_quequan',
            include:{
                model: Province,
                attributes:['name'],
                require:true
            }
        })
        res.send(totalPeople);
    }
    if (req.account.role_id == 2){
        const totalPeople = await People_quequan.findAndCountAll({
            attributes:['district_code_quequan'],
            group:'district_code_quequan',
            include:{
                model: District,
                attributes:['name'],
                require:true
            },
            where:{
                province_code_quequan:req.account.username
            }
        })
        res.send(totalPeople);
    }
    if (req.account.role_id == 3){
        const totalPeople = await People_quequan.findAndCountAll({
            attributes:['ward_code_quequan'],
            group:'ward_code_quequan',
            include:{
                model: Ward,
                attributes:['name'],
                require:true
            },
            where:{
                district_code_quequan:req.account.username
            }
        })
        res.send(totalPeople);
    }
    if (req.account.role_id == 4){
        const totalPeople = await People_quequan.findAndCountAll({
            attributes:['village_code_quequan'],
            group:'village_code_quequan',
            include:{
                model: Village,
                attributes:['name'],
                require:true
            },
            where:{
                ward_code_quequan:req.account.username
            }
        })
        res.send(totalPeople);
    }
}
module.exports = {
    createPeople,
    listPeopleById,
    totalPeople
}