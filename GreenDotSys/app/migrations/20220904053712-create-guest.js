'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Guests', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      photo_path: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      room_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Room', key: 'id' },
        onDelete: 'CASCADE'
      },
      checkinAt: {
        type: Sequelize.STRING
      },
      checkoutAt: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Guests');
  }
};