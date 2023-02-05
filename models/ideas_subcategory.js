'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ideas_subcategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ideas_subcategory.init({
    ideas_id: DataTypes.UUID,
    subcategory_id: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'ideas_subcategory',
    underscored: true,
  });
  return ideas_subcategory;
};