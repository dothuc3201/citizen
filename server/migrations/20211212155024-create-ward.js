'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Wards', {
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
      district_code :{
        type: Sequelize.STRING,
        references: {
          // This is a reference to another model
          model: 'districts',
          // This is the column name of the referenced model
          key: 'code',
          }
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Wards');
  }
};