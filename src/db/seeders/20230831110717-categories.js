'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert('categories', [{
      id: 1,
      name: 'phones',
    },
    {
      id: 2,
      name: 'tablets',
    },
    {
      id: 3,
      name: 'accessories',
    }], {});
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('categories', null, {});
  }
};
