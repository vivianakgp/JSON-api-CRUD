const fs = require("fs/promises");
const path = require("path");

const deleteRequestHandler = async (req, res) => {
  const jsonPath = path.resolve("./data.json");
  const jsonFile = await fs.readFile(jsonPath, "utf-8");
  const arrData = JSON.parse(jsonFile);
  const id = parseInt(req.url.split("/").at(-1));

  fs.writeFile(
    jsonPath,
    JSON.stringify(arrData.filter((task) => task.id != id))
  );
  res.statusCode = 200;
  res.end();
};

module.exports = deleteRequestHandler;
