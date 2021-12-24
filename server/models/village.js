'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Village extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Ward, People_quequan, People_tamtru, People_thuongtru}) {
      // define association here
      this.belongsTo(Ward,{foreignKey:'ward_code'});
      this.hasMany(People_quequan, {foreignKey:'village_code_quequan', targetKey:'code'});
      this.hasMany(People_thuongtru, {foreignKey:'village_code_thuongtru', targetKey:'code'});
      this.hasMany(People_tamtru, {foreignKey:'village_code_tamtru', targetKey:'code'});
    }
  };
  Village.init({
    name: DataTypes.STRING,
    isComplete: DataTypes.BOOLEAN,
    code:DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Village',
    timestamps: false
  });
  return Village;
};