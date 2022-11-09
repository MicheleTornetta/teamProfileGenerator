const employee = require("./helper");
const fs = require('fs');
const inquirer = require('inquirer');

// console.log(helper.renderPlaceholder(311, 433));

function writeHtmlFile(data){
  const html = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet"href="./assets/css/reset.css" />
    <link rel="stylesheet"href="./assets/css/style.css" />
    <title>Output Html</title>
  </head>
  <body>
    ${data}
  </body>
  </html>`;
  fs.writeFile("index.html", html, (err) => {
    if(err) return console.error(err);
    console.log("Success!");
  });
}

// writeHtmlFile(helper.renderPlaceholder(311, 433));

let init = () => {
  inquirer.prompt([
    {
      type: "input",
      message: "What is your full name?",
      name: "name"
    },
    {
      type: "input",
      message: "What is your work ID?",
      name: "id"
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "email"
    },
    {
      type: "list",
      name: "Title",
      message: "What is your job position?",
      choices: ["Manager", "Engineer", "Intern"],
    },

  ])
  .then( answers => {
    console.log(answers);
  });
}

init();