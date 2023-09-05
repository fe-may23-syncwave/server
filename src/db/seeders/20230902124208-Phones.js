'use strict';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const phones = require('../../public/api/phones');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const phonesWithDescriptionStringified = phones.map((phone) => ({
      ...phone,
      capacityAvailable: JSON.stringify(phone.capacityAvailable),
      colorsAvailable: JSON.stringify(phone.colorsAvailable),
      images: JSON.stringify(phone.images),
      description: JSON.stringify(phone.description),
      cell: JSON.stringify(phone.cell),
    }));

    await queryInterface.bulkInsert(
      'phones',
      phonesWithDescriptionStringified,
      {},
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('phones', null, {});
  },
};
