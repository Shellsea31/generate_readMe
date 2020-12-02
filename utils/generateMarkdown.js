// function to generate markdown for README
function generateMarkdown(answer) {
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
  
## Installation <a name="installation"></a>
${answer.install}

## Usage <a name="usage"></a>
${answer.usage}

## Contributing <a name="contributing"></a>
${answer.contribute}

## Test it <a name="tests"></a>

Try the program out yourself!
The application will be invoked by using the following command:

\`\`\`
${answer.test}
\`\`\`
  
## Questions <a name="questions"></a>
If you have additional questions send me an email!
You can also visit my GitHub account for more projects.

Email: [${answer.email}](${answer.email})
GitHub: [${answer.username}](https://github.com/${answer.username})
  
  `;
  };

// make function available in other files
module.exports = generateMarkdown;
