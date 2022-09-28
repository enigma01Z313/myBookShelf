const path = require("path");
const express = require("express");
const router = express.Router();

router.get("/*", (req, res, next) => {
  const { url: requstedUrl } = req;
  console.log(requstedUrl);

  if (requstedUrl.includes("robots.txt")) return res.end("robots.txt");

  if (requstedUrl.includes("assets"))
    return res.sendFile(path.join(__dirname, requstedUrl));

  if (requstedUrl[requstedUrl.length - 1] === "/")
    return res.render(`pages${requstedUrl}index`);

  return res.render(`pages${requstedUrl}`);
});

module.exports = router;
