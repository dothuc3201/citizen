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
        const people_quequan = await People_quequan.findAll({
            where:{
                cccd
            }
        });
        if (people_quequan) {
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
        const people_thuongtru = await People_thuongtru.findAll({
            where:{
                cccd
            }
        });
        if (people_thuongtru) {
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
        const people_tamtru = await People_tamtru.findAll({
            where:{
                cccd
            }
        });
        if (people_tamtru) {
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
        await People_quequan.destroy({
            where: {
                cccd
            }
        });
        await People_thuongtru.destroy({
            where: {
              cccd
            }
        });
        await People_tamtru.destroy({
            where: {
              cccd
            }
          });
        res.send({message:"xóa thành công"})
    } catch (error) {
        res.send({message:error})
    }
}


//update thông tin
const updatePeople = async (req, res) =>{
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
        await People_quequan.update({ hoten, 
            ngaysinh, 
            gioitinh, 
            tongiao,
            trinhdo, 
            nghenghiep,
            province_code_quequan,
            district_code_quequan,
            ward_code_quequan, 
            village_code_quequan,
            }, {
            where: {
              cccd
            }
          });
          await People_thuongtru.update({ hoten, 
            ngaysinh, 
            gioitinh, 
            tongiao,
            trinhdo, 
            nghenghiep,
            province_code_thuongtru,
            district_code_thuongtru,
            ward_code_thuongtru, 
            village_code_thuongtru }, {
            where: {
              cccd
            }
          });
          await People_tamtru.update({ hoten, 
            ngaysinh, 
            gioitinh, 
            tongiao,
            trinhdo, 
            nghenghiep,
            province_code_tamtru,
            district_code_tamtru,
            ward_code_tamtru, 
            village_code_tamtru }, {
            where: {
              cccd
            }
          });
          res.send({message:"update thành công"})
     } catch (error) {
         res.send({message:error})
     }
}

//lấy thông tin chi tiết người dân
const getDetailPeople = async (req, res) =>{
    const {cccd} = req.params;
    try {
        const peopleQuequan = await People_quequan.findAll({
            where:{
                cccd
            },include:[
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
            ]
        });
        const peopleThuongtru = await People_thuongtru.findAll({
            where:{
                cccd
            },include:[
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
            ]
        });
        const peopleTamtru = await People_tamtru.findAll({
            where:{
                cccd
            },include:[
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
            ]
        });
        res.send({peopleQuequan, peopleThuongtru, peopleTamtru});
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
        const totalPeople = await People_thuongtru.findAndCountAll({
            attributes:['province_code_thuongtru'],
            group:'province_code_thuongtru',
            include:{
                model: Province,
                attributes:['name'],
                require:true
            }
        })
        res.send(totalPeople);
    }
    if (req.account.role_id == 2){
        const totalPeople = await People_thuongtru.findAndCountAll({
            attributes:['district_code_thuongtru'],
            group:'district_code_thuongtru',
            include:{
                model: District,
                attributes:['name'],
                require:true
            },
            where:{
                province_code_thuongtru:req.account.username
            }
        })
        res.send(totalPeople);
    }
    if (req.account.role_id == 3){
        const totalPeople = await People_thuongtru.findAndCountAll({
            attributes:['ward_code_thuongtru'],
            group:'ward_code_thuongtru',
            include:{
                model: Ward,
                attributes:['name'],
                require:true
            },
            where:{
                district_code_thuongtru:req.account.username
            }
        })
        res.send(totalPeople);
    }
    if (req.account.role_id == 4){
        const totalPeople = await People_thuongtru.findAndCountAll({
            attributes:['village_code_thuongtru'],
            group:'village_code_thuongtru',
            include:{
                model: Village,
                attributes:['name'],
                require:true
            },
            where:{
                ward_code_thuongtru:req.account.username
            }
        })
        res.send(totalPeople);
    }
}
module.exports = {
    createPeople,
    listPeopleById,
    totalPeople,
    deletePeople,
    updatePeople
}