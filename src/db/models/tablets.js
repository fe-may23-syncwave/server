'use strict';
import { Model } from 'sequelize';
export default (sequelize, DataTypes) => {
  class Tablets extends Model {
    static associate(models) {
      Tablets.hasOne(models.Products, {
        foreignKey: 'itemId',
      });
    }
  }
  Tablets.init(
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
      namespaceId: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      capacityAvailable: {
        type: DataTypes.JSONB,
        allowNull: false,
      },
      capacity: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fullPrice: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      discountPrice: {
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
      screen: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      resolution: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      processor: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ram: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      camera: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      year: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'tablets',
    },
  );
  return Tablets;
};
