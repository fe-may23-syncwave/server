'use strict';
import { Model } from 'sequelize';
export default (sequelize, DataTypes) => {
  class Phones extends Model {
    static associate(models) {
      Phones.hasOne(models.Products, {
        foreignKey: 'itemId',
      });
    }
  }
  Phones.init(
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
      zoom: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cell: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'phones',
    },
  );
  return Phones;
};
