const jsonServer = require("json-server");
const server = jsonServer.create();

server.get("/total-supply", (req, res) => {
  res.jsonp(946972439797);
});

server.listen(3000, () => {
  console.log("JSON Server is running");
});
