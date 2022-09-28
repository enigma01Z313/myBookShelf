"use strict";
const { Model } = require("sequelize");
const getStatus = require("../staticDb/simpleStatus");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Role }) {
      this.belongsTo(Role, { foreignKey: "role_id" });
    }

    toJSON() {
      return {
        ...this.get(),
        id: this.uuid,
        role: {
          id: this.Role.uuid,
          name: this.Role.name,
        },
        permissions: JSON.parse(this.Role.permissions),
        status: getStatus(this.status),
        roleId: undefined,
        uuid: undefined,
        ip: undefined,
        accessToken: undefined,
        refreshToken: undefined,
        tokenDuration: undefined,
        password: undefined,
        oneTimeLogin: undefined,
        role_id: undefined,
        Role: undefined,
      };
    }
  }
  User.init(
    {
      uuid: {
        allowNull: false,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      phone: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      nationalCode: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      employeeCode: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      password: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      oneTimeLogin: {
        allowNull: true,
        type: DataTypes.STRING(5000),
      },
      firstName: {
        allowNull: false,
        type: DataTypes.STRING,
        field: "first_name",
      },
      lastName: {
        allowNull: false,
        type: DataTypes.STRING,
        field: "last_name",
      },
      roleId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: "role_id",
      },
      imageId: {
        type: DataTypes.STRING,
        field: "image_id",
      },
      ip: {
        type: DataTypes.STRING,
      },
      accessToken: {
        type: DataTypes.STRING,
        field: "access_token",
      },
      refreshToken: {
        type: DataTypes.STRING,
        field: "refresh_token",
      },
      tokenDuration: {
        type: DataTypes.INTEGER,
        field: "token_duration",
      },
      status: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      tableName: "users",
      modelName: "User",
    }
  );
  return User;
};
