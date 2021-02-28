
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(choices) {
    if (choices == "Apache") {
        return ('https://img.shields.io/badge/License-Apache%202.0-blue.svg');
      } else if (choices == "GNU") {
        return('https://img.shields.io/badge/License-GPLv3-blue.svg');
      } else if (choices == "MIT") {
        return('https://img.shields.io/badge/License-MIT-yellow.svg');
      } else if (choices == "ISC") {
        return('https://img.shields.io/badge/License-ISC-blue.svg');
      } else return ("");
    };

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(choices) {
    if (choices == "Apache") {
        return('https://opensource.org/licenses/Apache-2.0');
      } else if (choices == "GNU") {
        return('https://www.gnu.org/licenses/gpl-3.0');
      } else if (choices == "MIT") {
        return('https://opensource.org/licenses/MIT');
      } else if (choices == "ISC") {
        return('https://opensource.org/licenses/ISC');
      } else return ("");
    };


// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(choices) {
    if (choices == "Apache") {
        return('Apache');
      } else if (choices == "GNU") {
        return('GNU');
      } else if (choices == "MIT") {
        return('MIT');
      } else if (choices == "ISC") {
        return('ISC');
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

// // Function to write the readme
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
};


function generateMarkdown() {
  inquirer.prompt(questions).then((inquirerResponses) => {
    console.log("generating your readME");
    var myString = `
 ## TITLE 
 ${inquirerResponses.title}

 ## DESCRIPTION
 ${inquirerResponses.description}

 ## TABLE OF CONTENTS
 ${inquirerResponses.toc}

 ## INSTALLATION
 ${inquirerResponses.installation}

 ## USAGE
 ${inquirerResponses.usage}

 ## LICENSE
 ${inquirerResponses.license}
 ${renderLicenseBadge(inquirerResponses.license)}
 ${renderLicenseLink(inquirerResponses.license)}
 ${renderLicenseSection(inquirerResponses.license)}

 ## CONTRIBUTE
 ${inquirerResponses.contribute}

 ## TESTS
 ${inquirerResponses.tests}

 ## GITHUB
 ${inquirerResponses.github}

 ## EMAIL
 ${inquirerResponses.email}
 `
    writeToFile('README.md', myString)
 }) .catch(function (err){
 console.log(err);
 });
 }
 generateMarkdown();