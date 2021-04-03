'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Vehicles', [{
      name: 'Test Vehicle 1',
      createdAt: new Date(),
      registrationCode : '12',
      updatedAt: new Date()
    },
    {
      name: 'Test Vehicle 2',
      createdAt: new Date(),
      registrationCode : '12',
      updatedAt: new Date()
    },
    {
      name: 'Test Vehicle 3',
      createdAt: new Date(),
      registrationCode : '12',
      updatedAt: new Date()
    },
    {
      name: 'Test Vehicle 4',
      createdAt: new Date(),
      registrationCode : '12',
      updatedAt: new Date()
    },
    {
      name: 'Test Vehicle 5',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Test Vehicle 6',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Test Vehicle 7',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Test Vehicle 8',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Test Vehicle 9',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Test Vehicle 10',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Test Vehicle 11',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Test Vehicle 12',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Test Vehicle 13',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Test Vehicle 14',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Test Vehicle 15',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Test Vehicle 16',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Test Vehicle 17',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Test Vehicle 18',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Test Vehicle 19',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
