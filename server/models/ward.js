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
    static associate({District, Village, People}) {
      // define association here
      this.belongsTo(District,{foreignKey:'district_code'});
      this.hasMany(Village, {foreignKey:'village_code'});
      this.hasMany(People, {foreignKey:'ward_code_quequan'});
      this.hasMany(People, {foreignKey:'ward_code_thuongtru'});
      this.hasMany(People, {foreignKey:'ward_code_tamtru'});
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