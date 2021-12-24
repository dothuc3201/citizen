'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Province extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({District, People_quequan, People_tamtru, People_thuongtru}) {
      // define association here
      this.hasMany(District,{foreignKey:'province_code', targetKey:'code'});
      this.hasMany(People_quequan, {foreignKey:'province_code_quequan', targetKey:'code'});
      this.hasMany(People_thuongtru, {foreignKey:'province_code_thuongtru', targetKey:'code'});
      this.hasMany(People_tamtru, {foreignKey:'province_code_tamtru', targetKey:'code'});
    }
  };
  Province.init({
    name: DataTypes.STRING,
    code:DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Province',
    timestamps: false
  });
  return Province;
};