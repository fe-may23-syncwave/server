'use strict';
import { Model } from 'sequelize';
export default (sequelize, DataTypes) => {
  class Products extends Model {
    static associate(models) {
      Products.belongsTo(models.Category, {
        foreignKey: 'category_id',
      });

      Products.belongsTo(models.Capacity, {
        foreignKey: 'capacity_id',
      });
      Products.belongsTo(models.Color, {
        foreignKey: 'color_id',
      });
    }
  }
  Products.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      category_id: {
        allowNull: false,
        references: {
          model: 'categories',
          key: 'id',
        },
        type: DataTypes.INTEGER,
      },
      phoneId: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      itemId: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      fullPrice: {
        allowNull: false,
        type: DataTypes.FLOAT,
      },
      discountPrice: {
        type: DataTypes.FLOAT,
      },
      screen: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      capacity_id: {
        allowNull: false,
        references: {
          model: 'capacities',
          key: 'id',
        },
        type: DataTypes.INTEGER,
      },
      color_id: {
        allowNull: false,
        references: {
          model: 'colors',
          key: 'id',
        },
        type: DataTypes.INTEGER,
      },
      ram: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      year: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      image: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: 'products',
    },
  );
  return Products;
};
