'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ward extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({District, Village, People_quequan, People_tamtru, People_thuongtru}) {
      // define association here
      this.belongsTo(District,{foreignKey:'district_code', targetKey:'code'});
      this.hasMany(Village, {foreignKey:'ward_code', targetKey:'code'});
      this.hasMany(People_quequan, {foreignKey:'ward_code_quequan', targetKey:'code'});
      this.hasMany(People_thuongtru, {foreignKey:'ward_code_thuongtru', targetKey:'code'});
      this.hasMany(People_tamtru, {foreignKey:'ward_code_tamtru', targetKey:'code'});
    }
  };
  Ward.init({
    name: DataTypes.STRING,
    code:DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Ward',
    timestamps: false
  });
  return Ward;
};