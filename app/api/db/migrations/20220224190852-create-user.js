'use strict';
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      uuid: {
        allowNull: false,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      phone: {
        allowNull: false,
        type: DataTypes.STRING
      },
      email: {
        allowNull: true,
        type: DataTypes.STRING
      },
      nationalCode: {
        allowNull: false,
        type: DataTypes.STRING
      },
      employeeCode: {
        allowNull: false,
        type: DataTypes.STRING
      },
      password: {
        allowNull: true,
        type: DataTypes.STRING
      },
      oneTimeLogin: {
        allowNull: true,
        type: DataTypes.STRING(5000)
      },
      firstName: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'first_name'
      },
      lastName: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'last_name'
      },
      roleId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'role_id'
      },
      imageId: {
        type: DataTypes.STRING,
        field: 'image_id'
      },
      ip: {
        type: DataTypes.STRING
      },
      accessToken: {
        type: DataTypes.STRING,
        field: 'access_token'
      },
      refreshToken: {
        type: DataTypes.STRING,
        field: 'refresh_token'
      },
      tokenDuration: {
        type: DataTypes.INTEGER,
        field: 'token_duration'
      },
      status: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('users');
  }
};