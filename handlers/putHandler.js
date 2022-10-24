const fs = require("fs/promises");
const path = require("path");

const putRequestHeandler = async (req, res) => {
  const jsonPath = path.resolve("./data.json");
  const jsonFile = await fs.readFile(jsonPath, "utf-8");
  const arrData = JSON.parse(jsonFile);
  const id = parseInt(req.url.split("/").at(-1));
  console.log(`editando con id -->${id}`);
  let modifiedArr;
  req.on("data", (editedData) => {
    modifiedArr = arrData.map((task) => ({
      ...task,
      ...(task.id == id && JSON.parse(editedData)),
    }));
  });
  req.on("end", () => {
    fs.writeFile(jsonPath, JSON.stringify(modifiedArr));
  });
  res.statusCode = 200;
  res.end();
};

module.exports = putRequestHeandler;
