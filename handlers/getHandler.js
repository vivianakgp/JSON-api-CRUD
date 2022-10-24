const path = require("path");
const fs = require("fs/promises");

const getRequestHandler = async (req, res) => {
  const URL = req.url;
  if (URL === "/tasks") {
    const jsonPath = path.resolve("./data.json");
    const data = await fs.readFile(jsonPath, "utf-8");
    res.statusCode = 200;
    res.write(data);
    res.end();
  }
};
module.exports = getRequestHandler;
