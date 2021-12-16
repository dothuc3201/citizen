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
    static associate({Ward}) {
      // define association here
      this.belongsTo(Ward,{foreignKey:'ward_code'});
    }
  };
  Village.init({
    name: DataTypes.STRING,
    isComplete: DataTypes.BOOLEAN,
    code:DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Village',
  });
  return Village;
};