'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('accessories', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
        references: {
          model: 'products',
          key: 'productId',
        },
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      fullPrice: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      colorsAvailable: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      color: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      images: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: false,
      },
      description: {
        type: Sequelize.JSONB,
        allowNull: false,
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('accessories');
  },
};
