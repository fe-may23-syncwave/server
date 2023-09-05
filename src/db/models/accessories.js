'use strict';
import { Model } from 'sequelize';
export default (sequelize, DataTypes) => {
  class Accessories extends Model {
    static associate(models) {
      Accessories.hasOne(models.Products, {
        foreignKey: 'itemId',
      });
    }
  }
  Accessories.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING,
        references: {
          model: 'products',
          key: 'itemId',
        },
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      fullPrice: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      colorsAvailable: {
        type: DataTypes.JSONB,
        allowNull: false,
      },
      color: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      images: {
        type: DataTypes.JSONB,
        allowNull: false,
      },
      description: {
        type: DataTypes.JSONB,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'accessories',
    },
  );
  return Accessories;
};
