/* eslint-disable max-len */
'use strict';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const phones = require('../../public/api/products');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'products',
      phones.map((phone) => ({
        ...phone,
        createdAt: Sequelize.fn('now'),
        updatedAt: Sequelize.fn('now'),
      })),
      {},
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('products', null, {});
  },
};
