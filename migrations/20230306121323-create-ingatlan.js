'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ingatlanok', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      kategoria: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      leiras: {
        type: Sequelize.STRING
      },
      hirdetesDatuma: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.DATE.NOW
      },
      tehermentes: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      ar: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      kepUrl: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Ingatlans');
  }
};