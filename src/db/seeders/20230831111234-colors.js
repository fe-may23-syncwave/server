'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'colors',
      [
        {
          id: 1,
          name: 'black',
        },
        {
          id: 2,
          name: 'gold',
        },
        {
          id: 3,
          name: 'yellow',
        },
        {
          id: 4,
          name: 'green',
        },
        {
          id: 5,
          name: 'silver',
        },
        {
          id: 6,
          name: 'spacegray',
        },
        {
          id: 7,
          name: 'red',
        },
        {
          id: 8,
          name: 'white',
        },
        {
          id: 9,
          name: 'purple',
        },
        {
          id: 10,
          name: 'midnightgreen',
        },
        {
          id: 11,
          name: 'coral',
        },
        {
          id: 12,
          name: 'rosegold',
        },
      ],
      {},
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('colors', null, {});
  },
};
