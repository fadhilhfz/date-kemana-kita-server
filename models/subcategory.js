"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class subcategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.subcategory.belongsToMany(models.idea, {
        through: models.ideas_subcategory,
        foreignKey: "subcategory_id",
      });
    }
  }
  subcategory.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "subcategory",
      underscored: true,
    }
  );
  return subcategory;
};
