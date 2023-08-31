'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'capacities',
      [
        {
          id: 1,
          name: '32GB',
        },
        {
          id: 2,
          name: '64GB',
        },
        {
          id: 3,
          name: '128GB',
        },
        {
          id: 4,
          name: '256GB',
        },
        {
          id: 5,
          name: '512GB',
        },
      ],
      {},
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('capacities', null, {});
  },
};
