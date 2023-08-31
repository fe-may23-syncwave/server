'use strict';
import { Model } from 'sequelize';
export default (sequelize, DataTypes) => {
  class Colors extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // static associate(models) {
    //   // define association here
    // }
  }
  Colors.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Colors',
    },
  );
  return Colors;
};
