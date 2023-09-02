'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable("Results",
      {
        Rollno: {
          type: Sequelize.INTEGER(11),
          allowNull: false,
          primaryKey: true,
        },
        Name:
        {
          type: Sequelize.STRING(300),
          allowNull: false
        },
        DOB:
        {
          type: Sequelize.DATEONLY,
          allowNull: false
        },
        Score:
        {
          type: Sequelize.DECIMAL,
          allowNull: false
        },
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE
      })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
