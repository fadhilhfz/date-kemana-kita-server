'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class image_url extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  image_url.init({
    ideas_id: DataTypes.UUID,
    url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'image_url',
    underscored: true,
  });
  return image_url;
};