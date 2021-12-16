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
    static associate({Province, Ward}) {
      // define association here
      this.belongsTo(Province,{foreignKey:'province_code'});
      this.hasMany(Ward, {foreignKey:'district_code'})
    }
  };
  District.init({
    name: DataTypes.STRING,
    code:DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'District',
  });
  return District;
};