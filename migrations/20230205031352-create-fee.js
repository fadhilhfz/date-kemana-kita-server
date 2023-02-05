"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("fees", {
      id: {
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        type: Sequelize.UUID,
      },
      ideas_id: {
        type: Sequelize.UUID,
        references: {
          model: "ideas",
        },
        onDelete: "cascade",
        onUpdate: "cascade",
      },
      weekdays_fee: {
        type: Sequelize.DECIMAL,
      },
      weekend_fee: {
        type: Sequelize.DECIMAL,
      },
      single_fee: {
        type: Sequelize.DECIMAL,
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
    await queryInterface.dropTable("fees");
  },
};
