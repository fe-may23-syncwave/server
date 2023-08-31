'use strict';
import { Model } from 'sequelize';
export default (sequelize, DataTypes) => {
  class Colors extends Model {
    static associate(models) {
      Colors.hasMany(models.Product, {
        foreignKey: 'color_id',
      });
    }
  }
  Colors.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },
    },
    {
      sequelize,
      modelName: 'colors',
    },
  );
  return Colors;
};
