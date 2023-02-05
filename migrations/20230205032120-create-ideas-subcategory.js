"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("ideas_subcategories", {
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
      subcategory_id: {
        type: Sequelize.UUID,
        references: {
          model: "subcategories",
        },
        onDelete: "cascade",
        onUpdate: "cascade",
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
    await queryInterface.dropTable("ideas_subcategories");
  },
};
