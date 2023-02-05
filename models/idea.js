'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class idea extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  idea.init({
    name: DataTypes.STRING,
    category: DataTypes.STRING,
    description: DataTypes.STRING,
    latitude: DataTypes.DECIMAL,
    longitude: DataTypes.DECIMAL,
    ofc_web: DataTypes.STRING,
    ofc_twt: DataTypes.STRING,
    ofc_ig: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'idea',
    underscored: true,
  });
  return idea;
};