const { Op } = require("sequelize");
const { Role } = require("../../../db/models");
const fError = require("../../utils/fError");

const getRoles = async (req, res, next) => {
  const { defaultOptions, paginationedOptions } = res.dbOptions;

  const items = await Role.findAll(defaultOptions);
  const pagedItems = await Role.findAll(paginationedOptions);

  if (items.length === 0)
    return next(
      fError(404, "There are not roles yet", "نقش کاربری ای وجود ندارد")
    );

  res.jsonData = {
    data: pagedItems,
    total: items.length,
  };

  return next();
};

module.exports = getRoles;
