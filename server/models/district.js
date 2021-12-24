'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class District extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Province, Ward, People_quequan, People_tamtru, People_thuongtru}) {
      // define association here
      this.belongsTo(Province,{foreignKey:'province_code', targetKey:'code'});
      this.hasMany(Ward, {foreignKey:'district_code', targetKey:'code'});
      this.hasMany(People_quequan, {foreignKey:'district_code_quequan', targetKey:'code'});
      this.hasMany(People_thuongtru, {foreignKey:'district_code_thuongtru', targetKey:'code'});
      this.hasMany(People_tamtru, {foreignKey:'district_code_tamtru', targetKey:'code'});
    }
  };
  District.init({
    name: DataTypes.STRING,
    code:DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'District',
    timestamps: false
  });
  return District;
};