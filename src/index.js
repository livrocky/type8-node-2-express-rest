//importuojam express
const express = require("express");
const req = require("express/lib/request");
//sukuriam aplikacija
const app = express();
const PORT = 3000;

const colors = ["red", "green", "blue"];

//sukuriam endpoint
//app.METHOD(PATCH, HANDLER)
app.get("/home", (request, response) => {
  response.send("<h1>Hello world</h1>");
});
app.get("/home", (request, response) => {
  response.send("Hello world");
});

app.get("/api/colors", (request, response) => {
  console.log(" request.hostname===", request.hostname);
  console.log("request.ip===", request.ip);
  console.log("request.method===", request.method);
  response.json(colors);
});

//paleidziam aplikacija, klausomes requestu
app.listen(PORT, () => console.log("Express is running on port", PORT));
