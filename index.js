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
      name: "name",
      validate: typeInput => {
        if (typeInput) {
          return true;
        }
        else {
          return "Please enter your full name to continue.";
        }
        }
      },
    {
      type: "input",
      message: "What is your work ID?",
      name: "id",
      validate: typeInput => {
        if (!isNaN(Number(typeInput))) {
          return true;
        }
        else {
          return "Please enter your ID number to continue.";
        }
        }
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "email",
      validate: typeInput => {
        if (typeInput.includes ("@")) {
          return true;
        }
        else {
          return "Please enter your email address to continue.";
        }
        }
    },

    {
      type: "list",
      name: "title",
      message: "What is your job position?",
      choices: ["Manager", "Engineer", "Intern"],
    },
  ])
  // now start the manager question
  .then(answers => {
    console.log(answers);

    if (answers.title === 'Manager') {
      // do manager stuff
      return inquirer.prompt([
      {
        type: "input",
        name: "officeNumber",
        message: "What is your office Phone number?",
      }]).then(managerAnswers => {
        console.log(managerAnswers);
      });
    }
    // now start the engineer question     
    else if (answers.title === 'Engineer') {
      // do Engineer stuff
      return inquirer.prompt([
      {
        type: "input",
        name: "github",
        message: "What is your github login id?",
      }]).then(engineerAnswers => {
        console.log(engineerAnswers);
      }); 
    }
  // now start the intern question     

    else if (answers.title === 'Intern') {
      // do Intern stuff
      return inquirer.prompt([
      {
        type: "input",
        name: "school",
        message: "What is the name of your school?",
      }]).then(internAnswers => {
        console.log(internAnswers);

      });
    }
    menu();
  });
}

function menu() {
  return inquirer.prompt ({

  })
  .then ( ({options}) =>);
} 

init();