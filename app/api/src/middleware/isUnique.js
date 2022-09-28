const Models = require("../../db/models");
const fError = require("../utils/fError");

const isUnique = (model, modelFa, param, paramFa) => async (req, res, next) => {
  const keyParam = req.body[param];
  if(!keyParam)
    return next()

  const item = await Models[model].findOne({ where: { [param]: keyParam } });

  if (item)
    return next(
      fError(
        400,
        `Duplicate entry: another '${model}' with name '${keyParam}' exists`,
        `${paramFa} ${modelFa} تکراری میباشد`
      )
    );

  return next();
};

module.exports = isUnique;
