// Function to generate markdown content based on user input
function generateMarkdown(data) {
  return `
# ${data.title}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

Run "npm i" in Terminal for initializing a new Node.js Project
Run "npm install inquirer" for installing the Inquirer package

## Usage

To preview and Generate a Readme.md

## License

This project is licensed under the ${data.license} License.

## Contributing

User hementb2 is contributing the skills for Readme generator project

## Tests


Run "node index.js in terminal to generate readme.


## Questions

For questions about this project, please contact [${data.github}](https://github.com/${data.github}) at ${data.email}.
`;
}

module.exports = generateMarkdown;
