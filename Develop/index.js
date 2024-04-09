const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// Function to prompt the user for information about the project
async function promptUser() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of your project:'
        },
        // Add more prompts for other sections of the README file (installation, usage, etc.)
        {
            type: 'list',
            name: 'license',
            message: 'Choose a license for your project:',
            choices: ['MIT', 'Apache', 'GPL', 'None']
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub username:'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address:'
        }
    ]);
}

const fs = require('fs');

// Function to initialize the application
async function init() {
    try {
        // Prompt user for information
        const userResponses = await promptUser();
        // Generate markdown content based on user responses
        const markdown = generateMarkdown(userResponses);
        // Write markdown content to README.md file
        fs.writeFileSync('README.md', markdown);
        console.log('README.md generated successfully!');
    } catch (error) {
        console.error('Error:', error);
    }
}

// Call init to start the application
init();

