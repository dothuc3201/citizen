'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class People_thuongtru extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Province, District, Ward, Village}) {
      // define association here
      this.belongsTo(Province, {foreignKey:'province_code_thuongtru', targetKey:'code'});
      this.belongsTo(District, {foreignKey:'district_code_thuongtru', targetKey:'code'});
      this.belongsTo(Ward, {foreignKey:'ward_code_thuongtru', targetKey:'code'});
      this.belongsTo(Village, {foreignKey:'village_code_thuongtru', targetKey:'code'});

    }
  };
  People_thuongtru.init({
    cccd: DataTypes.STRING,
    hoten: DataTypes.STRING,
    ngaysinh: DataTypes.DATEONLY,
    gioitinh: DataTypes.STRING,
    tongiao: DataTypes.STRING,
    nghenghiep: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'People_thuongtru',
  });
  return People_thuongtru;
};