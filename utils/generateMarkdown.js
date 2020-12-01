module.exports = {
  // function to generate markdown for README

  generateMarkdown: function generateMarkdown(answer) {
    return `# ${answer.title}
  
## License
${answer.license}

## Description
${answer.description}

## Table of Contents
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [Contributing](#contributing)
  4. [Tests](#tests)
  5. [Questions](#questions)
  6. [License](#licence)
  
## Installation <a name="installation"></a>
${answer.install}

## Usage <a name="usage"></a>
${answer.usage}

## Contributing <a name="contributing"></a>
${answer.contribute}

## Test it <a name="tests"></a>

Try the program out yourself!
Type the following in the terminal to initialize:


  
## Questions <a name="questions"></a>
If you have additional questions send me an [email](${answer.email}).
You can also visit my GitHub account for more projects by clicking [here](https://github.com/${answer.username}).
  
  `;
  },
};
