"use strict";

const fs = require("fs");
const path = require("path");
const basename = path.basename(__filename);
const schemas = {};

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    const schema = require(path.join(__dirname, file));
    const fileName = file.split(".");
    fileName.pop();
    const scheemaName = `${fileName[0]}Schema`;
    schemas[scheemaName] = schema;
  });

module.exports = schemas;
