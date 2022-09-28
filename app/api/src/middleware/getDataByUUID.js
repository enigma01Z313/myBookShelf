const Models = require("../../db/models");
const fError = require("../utils/fError");

const getDataByUUID = (model, modelFa) => async (req, res, next) => {
  const { uuid } = req.params;
  const item = await Models[model].findOne({ where: { uuid } });

  if (!item)
    return next(
      fError(
        404,
        `Not found: '${model}' with id '${uuid}' does not exist`,
        `یافت نشد: ${modelFa} با ${uuid} وجود ندارد`
      )
    );

  res.jsonData = item;
  next();
};

module.exports = getDataByUUID;
