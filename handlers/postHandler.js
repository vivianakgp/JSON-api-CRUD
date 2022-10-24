const path = require("path");
const fs = require("fs/promises");

const postRequestHandler = async (req, res) => {
  const jsonPath = path.resolve("./data.json");
  const jsonFile = await fs.readFile(jsonPath, "utf-8");
  const arrData = JSON.parse(jsonFile);
  req.on("data", (newData) => {
    const objNewData = JSON.parse(newData);
    arrData.push(objNewData);
  });
  req.on("end", () => {
    fs.writeFile(jsonPath, JSON.stringify(arrData));
  });
  res.statusCode = 201;
  res.end();
};
module.exports = postRequestHandler;
