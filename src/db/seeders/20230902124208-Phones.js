'use strict';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const phones = require('../../public/api/phones');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const phonesWithDescriptionStringified = phones.map((phone) => ({
      ...phone,
      description: JSON.stringify(phone.description),
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
