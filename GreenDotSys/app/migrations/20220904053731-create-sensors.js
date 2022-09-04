'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Sensors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Model: {
        type: Sequelize.STRING
      },
      sensortype_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'SensorTypes', key: 'id' },
        onDelete: 'CASCADE'
      },
      equipment_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Equipment', key: 'id' },
        onDelete: 'CASCADE'
      },
      owner_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Hotels', key: 'id' },
        onDelete: 'CASCADE'
      },
      Location: {
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
    await queryInterface.dropTable('Sensors');
  }
};