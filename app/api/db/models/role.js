"use strict";
const { Model } = require("sequelize");
const getStatus = require("../staticDb/simpleStatus");

module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    toJSON() {
      return {
        ...this.get(),
        id: this.uuid,
        permissions: JSON.parse(this.permissions),
        status: getStatus(this.status),
        uuid: undefined,
      };
    }

    static associate(models) {
      // define association here
    }
  }
  Role.init(
    {
      uuid: {
        allowNull: false,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },
      permissions: {
        allowNull: false,
        type: DataTypes.STRING,
        defaultValue: "",
      },
      status: {
        allowNull: false,
        type: DataTypes.STRING,
        defaultValue: 1,
      },
    },
    {
      sequelize,
      tableName: "roles",
      modelName: "Role",
    }
  );
  return Role;
};
