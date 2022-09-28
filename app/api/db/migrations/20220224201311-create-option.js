"use strict";
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable("options", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      key: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },
      value: {
        allowNull: false,
        type: DataTypes.STRING(10000),
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable("options");
  },
};
