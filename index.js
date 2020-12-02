// to write file
const fs = require("fs");
// to use inquirer
const inquirer = require("inquirer");
// to bring in function from modules
const generateMarkdown = require("./utils/generateMarkdown");


// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log("written");
  });
}

// function to initialize program
function init() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
      },
      {
        type: "input",
        name: "description",
        message: "Write a description for your project.",
      },
      {
        type: "input",
        name: "install",
        message: "Please provide installation instructions.",
      },
      {
        type: "input",
        name: "test",
        message: "What code should the user type to initialize your program?",
      },
      {
        type: "input",
        name: "usage",
        message: "Give an example of what your project can do.",
      },
      {
        type: "input",
        name: "contribute",
        message: "How can users contribute to your project?",
      },
      {
        type: "input",
        name: "username",
        message: "What is your GitHub username?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your email?",
      },
      {
        type: "list",
        name: "license",
        message: "Choose a License for your Project",
        choices: [
          {
            name: "GitHub license",
            value:
              "[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/Naereen/StrapDown.js/blob/master/LICENSE)  This project is licensed under the terms of the GitHub license",
          },
          {
            name: "MIT License",
            value:
              "[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)  This project is licensed under the terms of the MIT license.",
          },
        ],
      },
    ])
    .then((answer) => {
      let data = generateMarkdown(answer);
      writeToFile("README.md", data);
    });
}

// function call to initialize program
init();
