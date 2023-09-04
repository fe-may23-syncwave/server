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
        references: {
          model: 'categories',
          key: 'id',
        },
        type: Sequelize.INTEGER,
      },
      productId: {
        allowNull: false,
        type: Sequelize.STRING,
        references: {
          model: ['accessories'],
          key: 'id',
        },
      },
      itemId: {
        type: Sequelize.STRING,
        references: {
          model: ['phones', 'tablets'],
          key: 'id',
        },
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
        type: Sequelize.FLOAT,
      },
      screen: {
        type: Sequelize.STRING,
      },
      capacity_id: {
        references: {
          model: 'capacities',
          key: 'id',
        },
        type: Sequelize.INTEGER,
      },
      color_id: {
        allowNull: false,
        references: {
          model: 'colors',
          key: 'id',
        },
        type: Sequelize.INTEGER,
      },
      ram: {
        type: Sequelize.STRING,
      },
      image: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      year: {
        type: Sequelize.INTEGER,
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('products');
  },
};
