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
    static associate({District, People}) {
      // define association here
      this.hasMany(District,{foreignKey:'province_code'});
      this.hasMany(People, {foreignKey:'province_code_quequan'});
      this.hasMany(People, {foreignKey:'province_code_thuongtru'});
      this.hasMany(People, {foreignKey:'province_code_tamtru'});
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