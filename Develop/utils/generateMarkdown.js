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

// Add installation instructions here

## Usage

// Add usage information here

## License

This project is licensed under the ${data.license} License.

## Contributing

// Add contribution guidelines here

## Tests

// Add test instructions here

## Questions

For questions about this project, please contact [${data.github}](https://github.com/${data.github}) at ${data.email}.
`;
}

module.exports = generateMarkdown;
