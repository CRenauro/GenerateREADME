
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');


// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license == "Apache") {
        renderLicenseBadge('https://img.shields.io/badge/License-Apache%202.0-blue.svg');
      } else if (license == "GNU") {
        renderLicenseBadge('https://img.shields.io/badge/License-GPLv3-blue.svg');
      } else if (license == "MIT") {
        renderLicenseBadge('https://img.shields.io/badge/License-MIT-yellow.svg');
      } else if (license == "ISC") {
        renderLicenseBadge('https://img.shields.io/badge/License-ISC-blue.svg');
      } else return ("");
    };

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (choices == "Apache") {
        renderLicenseLink('https://opensource.org/licenses/Apache-2.0');
      } else if (choices == "GNU") {
        renderLicenseLink('https://www.gnu.org/licenses/gpl-3.0');
      } else if (choices == "MIT") {
        renderLicenseLink('https://opensource.org/licenses/MIT');
      } else if (choices == "ISC") {
        renderLicenseLink('https://opensource.org/licenses/ISC');
      } else return ("");
    };


// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (choices == "Apache") {
        renderLicenseSection('Apache');
      } else if (choices == "GNU") {
        renderLicenseSection('GNU');
      } else if (choices == "MIT") {
        renderLicenseSection('MIT');
      } else if (choices == "ISC") {
        renderLicenseSection('ISC');
      } else return ("");
};


const questions = [
        {
            type: 'input',
            name: 'title',
            message: 'What is your project title?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Describe your project.',
        },
        {
            type: 'list',
            name: 'toc',
            message: 'Table of Contents',
            choices: ['Installation', 'Usage', 'Credits', 'License']
        },
        {
            type: 'input',
            name: 'installation',
            message: 'How to install your product',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How to use your product',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Which license does it use?',
            choices: ['Apache', 'GNU', 'MIT', 'ISC'],
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'How to contribute?',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'What tests were done?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your Github user name?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
        },
    ];   

//Function to write the readme
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
};


//function to initialize the application
function generateMarkdown() {
    inquirer.prompt(questions).then((inquirerResponses) => {
      console.log("generating your readME");
    renderLicenseBadge(response, license);
    renderLicenseLink(response, license);
    renderLicenseSection(response, license);
    writeToFile('README.md', gernerateMarkdown({...inquirerResponses}));
  }) .catch(function (err){
  console.log(err);

});

generateMarkdown();
