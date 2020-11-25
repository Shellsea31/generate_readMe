module.exports = {
  generateMarkdown: // function to generate markdown for README
  function generateMarkdown(data) {
    return `# ${data.title}
    
    ## Description
    ${data.description}
    ## Table of Contents
    1. Installation(#installation)
    2. Usage(#usage)
    3. Contributing(#contributing)
    4. Tests(#tests)
    5. Questions(#questions)
    6. License(#licence)

    ## Installation
    ${data.install}
    ## Usage
    ${data.usage}
    ## Contributing
    ${data.contribute}
    ## Tests

    ## Questions
    If you have additional questions send me an [email](${data.email}).
    You can also visit my GitHub account for more projects by clicking [here](${data.username}).

    ## License
    ${data.license}
  `;
  }
};
