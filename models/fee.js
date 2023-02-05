'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class fee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  fee.init({
    ideas_id: DataTypes.UUID,
    weekdays_fee: DataTypes.DECIMAL,
    weekend_fee: DataTypes.DECIMAL,
    single_fee: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'fee',
    underscored: true,
  });
  return fee;
};