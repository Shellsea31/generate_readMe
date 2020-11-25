// const util = require("./utils/generateMarkdown");
// util.generateMarkdown(titlefromdata)

const inquirer = require("inquirer");

// array of questions for user
const questions = [
  "What is the title of your project?",
  "Write a description for your project",
];

// function to write README file
// function writeToFile(fileName, data) {}

// function to initialize program
const init = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
      },
      {
        type: "input",
        name: "description",
        message: "Write a description for your project",
      },
    ])
    .then((answers) => {
      console.log(answers);
    });
};

// function call to initialize program
init();
