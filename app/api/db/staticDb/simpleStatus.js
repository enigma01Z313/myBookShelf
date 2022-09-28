const statusList = [
  {
    code: 0,
    label: "غیر فعال",
    color: "red",
  },
  {
    code: 1,
    label: "فعال",
    color: "greed",
  },
];

const getStatus = (code) => {
  return statusList.find((item) => item.code === parseInt(code));
};

module.exports = getStatus;
