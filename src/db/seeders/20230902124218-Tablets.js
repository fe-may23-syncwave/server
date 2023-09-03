/* eslint-disable max-len */
'use strict';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const tablets = require('../../public/api/tablets');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const tabletsWithDescriptionStringified = tablets.map((tablet) => ({
      ...tablet,
      description: JSON.stringify(tablet.description),
    }));

    await queryInterface.bulkInsert(
      'tablets',
      tabletsWithDescriptionStringified,
      {},
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('tablets', null, {});
  },
};
