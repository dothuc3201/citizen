'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Districts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        default:true,
      },
      code: {
        type: Sequelize.STRING,
        default:true,
        unique: true
      },
      province_code :{
        type: Sequelize.STRING,
        references: {
          // This is a reference to another model
          model: 'provinces',
          // This is the column name of the referenced model
          key: 'code',
          }
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Districts');
  }
};