'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      category_id: {
        allowNull: false,
        field: 'category_id',
        references: {
          model: 'categories',
          key: 'id',
        },
        type: Sequelize.INTEGER,
      },
      productId: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      itemId: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'itemId',
        unique: true,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true,
      },
      fullPrice: {
        allowNull: false,
        type: Sequelize.FLOAT,
      },
      discountPrice: {
        allowNull: true,
        type: Sequelize.FLOAT,
      },
      screen: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      capacity_id: {
        allowNull: true,
        field: 'capacity_id',
        references: {
          model: 'capacities',
          key: 'id',
        },
        type: Sequelize.INTEGER,
      },
      color_id: {
        allowNull: false,
        field: 'color_id',
        references: {
          model: 'colors',
          key: 'id',
        },
        type: Sequelize.INTEGER,
      },
      ram: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      image: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      year: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('products');
  },
};
