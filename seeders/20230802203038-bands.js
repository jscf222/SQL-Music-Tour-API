'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('band', [
      {
        name: 'Oriole Fugitives',
        genre: 'Indie',
        available_start_time: '2024-05-14T12:00:00',
        end_time: '2024-05-14T18:00:00'
      },
      {
        name: 'The Codfish Optimist',
        genre: 'Alternative',
        available_start_time: '2024-05-14T22:00:00',
        end_time: '2024-05-14T19:00:00'
      },
      {
        name: 'Exploiter Impedance',
        genre: 'Pop',
        available_start_time: '2024-05-14T16:00:00',
        end_time: '2024-05-14T21:00:00'
      },
      {
        name: 'The Underdone',
        genre: 'Rock',
        available_start_time: '2024-05-14T18:00:00',
        end_time: '2024-05-14T23:00:00'
      },
      {
        name: 'Ague Tertiary',
        genre: 'Indie',
        available_start_time: '2024-05-14T19:00:00',
        end_time: '2024-05-14T23:00:00'
      },
      {
        name: 'The Bystander Mistakes',
        genre: 'Alternative',
        available_start_time: '2024-05-14T17:00:00',
        end_time: '2024-05-14T22:00:00'
      },
      {
        name: 'Collide Applicant',
        genre: 'Oldies',
        available_start_time: '2024-05-14T21:00:00',
        end_time: '2024-05-14T23:00:00'
      },
      {
        name: 'Apricot Symptoms',
        genre: 'Metal',
        available_start_time: '2024-05-14T15:00:00',
        end_time: '2024-05-14T20:00:00'
      },
      {
        name: 'Olden Fearless',
        genre: 'Metal',
        available_start_time: '2024-05-14T14:00:00',
        end_time: '2024-05-14T19:00:00'
      },
      {
        name: 'Rhymes Of',
        genre: 'Folk',
        available_start_time: '2024-05-14T13:00:00',
        end_time: '2024-05-14T19:00:00'
      },
    ], {});
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('band', null, {})
  }
};