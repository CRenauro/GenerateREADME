const inquirer = require('inquirer')
const path = require('path')
const fs = require('fs')

function renderLicenseBadge(license) {
   
                            

    ]
}


function renderLicenseLink(license) {}


function renderLicenseSection(license) {}


inquirer
    .prompt ([
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
            list: ['Installation', 'Usage', 'Credits', 'License']
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
        }
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
        }

    ])

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
        console.log("generating your readME");
        writeToFile('README.md', gernerateMarkdown({...inquirerResponses}))
    })
}

module.exports = generateMarkdown;