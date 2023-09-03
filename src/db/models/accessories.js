'use strict';
import { Model } from 'sequelize';
export default (sequelize, DataTypes) => {
  class Accessories extends Model {
    static associate(models) {
      Accessories.belongsTo(models.Products, {
        foreignKey: 'productId',
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
          key: 'productId',
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
        type: DataTypes.STRING,
        allowNull: false,
      },
      color: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      images: {
        type: DataTypes.STRING,
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
