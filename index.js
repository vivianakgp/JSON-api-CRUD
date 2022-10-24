const http = require("http");
const path = require("path");
const fs = require("fs/promises");
const getRequestHandler = require("./handlers/getHandler");
const postRequestHandler = require("./handlers/postHandler");
const putRequestHeandler = require("./handlers/putHandler");
const deleteRequestHandler = require("./handlers/deleteHeandler");

const server = http.createServer((req, res) => {
  const { method } = req;
  switch (method) {
    case "GET":
      return getRequestHandler(req, res);
    case "POST":
      return postRequestHandler(req, res);
    case "PUT":
      return putRequestHeandler(req, res);
    case "DELETE":
      return deleteRequestHandler(req, res);
  }
  res.end();
});

const PORT = 8000;
server.listen(PORT, () => {
  console.log(`server running on port ${PORT}...`);
});
