'use strict';
import { Model } from 'sequelize';
export default (sequelize, DataTypes) => {
  class Capacity extends Model {
    static associate(models) {
      Capacity.hasMany(models.Product, {
        foreignKey: 'capacity_id',
      });
    }
  }
  Capacity.init(
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
      modelName: 'capacities',
    },
  );
  return Capacity;
};
