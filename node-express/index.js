const express = require("express");
const path = require("path");
const fs = require("fs");
const url = require("url");
const { dataSmartphone } = require("./data/data");
/* const { randInt , getRandomStudent, templ, createSortArr } = require("./utils/random");
const { get } = require("http"); */

const app = express();
const port = 3000;

/* const stTemplates = fs.readFileSync(
  "./templates/student.html",
  "utf-8"
);

const page = fs.readFileSync(
  "./public/index.html",
  "utf-8"
); */

/* const list = fs.readFileSync("./templates/list.html", "utf-8"); */

app.use(express.static("public"));
app.use(express.json());

app.get("/getSmartphoneByBrand", (req, res) => {
    /* let getStudent = getRandomStudent();
  let i = page.replace("{{content}}", templ(stTemplates, getStudent)); */
    const parsedUrl = url.parse(req.url, true);

    let dataFromServer = JSON.stringify(dataSmartphone(parsedUrl.query.brand));
    res.status(200).json(dataFromServer);
});

/* app.get("/getAllStudents", (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  let setting = parsedUrl.query.param;
  let arr = [];
  for(let i = 0; i < randInt(10, 15); i++){
    arr.push(getRandomStudent());
  }
  arr = createSortArr(arr, setting);
  
  let a = list.replace("{{content}}", arr.map((item) => templ(stTemplates, item)).join(""));
  res.status(200).send(a); 
});  */

app.use((req, res, next) => {
    res.status(404).send("<h1>Not found :(</h1>");
});

app.listen(port);
