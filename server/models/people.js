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
    static associate({Province, District, Ward, Village}) {
      // define association here
      this.belongsTo(Province, {foreignKey:'province_code_quequan'});
      this.belongsTo(Province, {foreignKey:'province_code_thuongtru'});
      this.belongsTo(Province, {foreignKey:'province_code_tamtru'});
      this.belongsTo(District, {foreignKey:'district_code_quequan'});
      this.belongsTo(District, {foreignKey:'district_code_thuongtru'});
      this.belongsTo(District, {foreignKey:'district_code_tamtru'});
      this.belongsTo(Ward, {foreignKey:'ward_code_quequan'});
      this.belongsTo(Ward, {foreignKey:'ward_code_thuongtru'});
      this.belongsTo(Ward, {foreignKey:'ward_code_tamtru'});
      this.belongsTo(Village, {foreignKey:'village_code_quequan'});
      this.belongsTo(Village, {foreignKey:'village_code_thuongtru'});
      this.belongsTo(Village, {foreignKey:'village_code_tamtru'});
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
  }, {
    sequelize,
    modelName: 'People',
  });
  return People;
};