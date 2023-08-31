'use strict';
import { Model } from 'sequelize';
export default (sequelize, DataTypes) => {
  class Capacity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // static associate(models) {
    //   define association here
    // }
  }
  Capacity.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Capacity',
    },
  );
  return Capacity;
};
