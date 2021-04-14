const fetch = require("node-fetch");

const fs = require("fs");

let url = "http://jsonplaceholder.typicode.com/posts";

let settings = { method: "Get" };

fetch(url, settings)
  .then((result) => result.json())
  .then((dataFetched) => {
    const data = JSON.stringify(dataFetched, null, 4);

    fs.writeFile("./result/posts.json", data, (err) => {
      if (err) {
        console.log("Error writing file to json", err);
      } else {
        console.log("File created and saved succesfully into result folder!");
      }
    });
  });
