"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("ideas", {
      id: {
        primaryKey: true,
        type: Sequelize.UUID,
      },
      name: {
        type: Sequelize.STRING,
      },
      category: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      latitude: {
        type: Sequelize.DECIMAL(10, 6),
      },
      longitude: {
        type: Sequelize.DECIMAL(10, 6),
      },
      ofc_web: {
        type: Sequelize.STRING,
      },
      ofc_twt: {
        type: Sequelize.STRING,
      },
      ofc_ig: {
        type: Sequelize.STRING,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("ideas");
  },
};
