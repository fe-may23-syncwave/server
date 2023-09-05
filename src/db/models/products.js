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
      Products.hasOne(models.Phones, {
        foreignKey: 'itemId',
      });
      Products.hasOne(models.Tablets, {
        foreignKey: 'itemId',
      });
      Products.hasOne(models.Accessories, {
        foreignKey: 'itemId',
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
        field: 'category_id',
        references: {
          model: 'categories',
          key: 'id',
        },
        type: DataTypes.INTEGER,
      },
      productId: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      itemId: {
        allowNull: false,
        field: 'itemId',
        type: DataTypes.STRING,
        references: {
          model: ['phones', 'tablets', 'accessories'],
          key: 'id',
        },
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
        allowNull: true,
        type: DataTypes.FLOAT,
      },
      screen: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      capacity_id: {
        allowNull: true,
        field: 'capacity_id',
        references: {
          model: 'capacities',
          key: 'id',
        },
        type: DataTypes.INTEGER,
      },
      color_id: {
        allowNull: false,
        field: 'color_id',
        references: {
          model: 'colors',
          key: 'id',
        },
        type: DataTypes.INTEGER,
      },
      ram: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      year: {
        allowNull: true,
        type: DataTypes.INTEGER,
      },
      image: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: 'products',
    },
  );
  return Products;
};
