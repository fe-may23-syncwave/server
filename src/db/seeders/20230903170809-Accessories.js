/* eslint-disable max-len */
'use strict';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const accessories = require('../../public/api/accessories');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const accessoriesWithDescriptionStringified = accessories.map(
      (accessory) => ({
        ...accessory,
        colorsAvailable: JSON.stringify(accessory.colorsAvailable),
        images: JSON.stringify(accessory.images),
        description: JSON.stringify(accessory.description),
      }),
    );

    await queryInterface.bulkInsert(
      'accessories',
      accessoriesWithDescriptionStringified,
      {},
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('accessories', null, {});
  },
};
