const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require('path')
const fs = require("fs");
app.use(express.static(path.resolve(__dirname, './')))
app.get("/", (req,res) => {
    fs.readFile("./index.html", (err, data) => {
      res.writeHead(200, {
        "Content-type": "text/html",
      });
      if (err) {
        res.end("500");
      } else {
        res.end(data);
      }
    })
  });
  
  app.listen("5200", () => {
    console.log("app listen on 5200");
  });