'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      category_id: {
        allowNull: false,
        references: {
          model: 'categories',
          key: 'id',
        },
        type: Sequelize.INTEGER,
      },
      phoneId: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      itemId: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      fullPrice: {
        allowNull: false,
        type: Sequelize.FLOAT,
      },
      discountPrice: {
        type: Sequelize.FLOAT,
      },
      screen: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      capacity_id: {
        allowNull: false,
        references: {
          model: 'capacities',
          key: 'id',
        },
        type: Sequelize.INTEGER,
      },
      color_id: {
        allowNull: false,
        references: {
          model: 'capacities',
          key: 'id',
        },
        type: Sequelize.INTEGER,
      },
      ram: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      year: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      image: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Products');
  }
};
