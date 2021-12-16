'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class People extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
      
    }
  };
  People.init({
    cccd: DataTypes.STRING,
    hoten: DataTypes.STRING,
    ngaysinh: DataTypes.DATEONLY,
    gioitinh: DataTypes.BOOLEAN,
    tongiao: DataTypes.STRING,
    trinhdo: DataTypes.STRING,
    nghenghiep: DataTypes.STRING,
    village_code_quequan:DataTypes.STRING,
    village_code_thuongtru:DataTypes.STRING,
    village_code_tamtru:DataTypes.STRING
  }, {
    sequelize,
    modelName: 'People',
  });
  return People;
};