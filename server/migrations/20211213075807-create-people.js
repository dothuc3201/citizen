'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('People', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cccd: {
        type: Sequelize.STRING
      },
      hoten: {
        type: Sequelize.STRING
      },
      ngaysinh: {
        type: Sequelize.DATEONLY
      },
      gioitinh: {
        type: Sequelize.BOOLEAN
      },
      tongiao: {
        type: Sequelize.STRING
      },
      trinhdo: {
        type: Sequelize.STRING
      },
      nghenghiep: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      village_code_quequan :{
        type: Sequelize.STRING,
      },
      village_code_thuongtru :{
        type: Sequelize.STRING,
      },
      village_code_tamtru :{
        type: Sequelize.STRING,
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('People');
  }
};