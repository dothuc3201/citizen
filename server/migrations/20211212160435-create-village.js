'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Villages', {
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
      isComplete: {
        type: Sequelize.BOOLEAN,
        default:true,
      },
      ward_code :{
        type: Sequelize.STRING,
        references: {
          // This is a reference to another model
          model: 'wards',
          // This is the column name of the referenced model
          key: 'code',
          }
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Villages');
  }
};