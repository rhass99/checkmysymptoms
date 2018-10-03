'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('UserApiResults', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      sex: {
        type: Sequelize.ENUM,
          values: ['male', 'female']
      },
      age: {
        type: Sequelize.INTEGER
      },
      evidence: {
        type: Sequelize.ARRAY(Sequelize.JSONB)
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('UserApiResults');
  }
};