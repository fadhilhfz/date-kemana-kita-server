"use strict";

const { DataTypes } = require("sequelize");
const { v4: uuidv4 } = require("uuid");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "ideas",
      [
        {
          id: uuidv4(),
          name: "Kebun Raya Bogor",
          category: "Indoor",
          description: "Sebuah kebun di Bogor",
          latitude: -6.597629,
          longitude: 106.799568,
          ofc_web: "https://monas.id/bogor",
          ofc_twt: "kebunraya_id",
          ofc_ig: "kebunraya_id",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: uuidv4(),
          name: "Monas",
          category: "Indoor",
          description: "Sebuah monumen nasional di Jakarta",
          latitude: -6.597629,
          longitude: 106.799568,
          ofc_web: "https://Monas.id/",
          ofc_twt: "Monas",
          ofc_ig: "Monas",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: uuidv4(),
          name: "Mixue",
          category: "Indoor",
          description: "Sebuah cafe di Bekasi",
          latitude: -6.597629,
          longitude: 106.799568,
          ofc_web: "https://Mixue.id/",
          ofc_twt: "Mixue",
          ofc_ig: "Mixue",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("ideas", null, {});
  },
};
