const { Op } = require("sequelize");

const filteredData = (exclude) => (req, res, next) => {
  const whereOptions = [];
  whereOptions.push(exclude);
  const { page, limit, status } = req.query;

  //filters section
  if (status) whereOptions.push({ status });

  const defaultOptions = { where: { [Op.and]: [...whereOptions] } };
  const paginationedOptions = Object.assign({}, defaultOptions);

  //pagination section
  if (limit) paginationedOptions.limit = parseInt(limit);
  if (page) {
    const limits = limit ?? 10;
    const pageNum = page > 0 ? parseInt(page) - 1 : 0;

    paginationedOptions.limit = parseInt(limit);
    paginationedOptions.offset = pageNum * parseInt(limit);
  }

  res.dbOptions = { defaultOptions, paginationedOptions };
  next();
};

module.exports = filteredData;
