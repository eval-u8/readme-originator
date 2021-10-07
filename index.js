// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "projectTitle",
        message: "What is the title of the project? (Required)",
        validate: (projectTitle) => {
            if (projectTitle) {
                return true;
            } else {
                console.log("Please enter the title of your project.");
                return false;
            }
        },
    },
    {
        input: "input",
        name: "githubUser",
        message: "What is your GitHub username?",
        validate: (ghuserInput) => {
            if (ghuserInput) {
                return true;
            } else {
                console.log("Please enter your GitHub username.");
                return false;
            }
        },
    },
    {
        input: "input",
        name: "email",
        message: "What is your e-mail address?",
        validate: (emailAdd) => {
            if (emailAdd) {
                return true;
            } else {
                console.log("Please enter your GitHub username.");
                return false;
            }
        },
    },
    {
        type: "input",
        name: "description",
        message: "Please enter a description of the project (Required)",
        validate: (projectdInput) => {
            if (projectdInput) {
                return true;
            } else {
                console.log("Please enter a description for your project.");
                return false;
            }
        },
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide the project's installation instructions.",
    },
    {
        type: "input",
        name: "usage",
        message: "Please enter the projects usage details.",
    },
    {
        type: "input",
        name: "contribution",
        message:
            "Please enter details as to how people can contribute to the project.",
    },
    {
        type: "input",
        name: "tests",
        message: "Enter project test instructions",
        validate: (testInput) => {
            if (testInput) {
                return true;
            } else {
                console.log("Please enter test instructions");
                return false;
            }
        },
    },
    {
        type: "list",
        name: "license",
        message: "Which License would you like to use?",
        choices: [
            "ISC License",
            "GNU GPLv3",
            "zLib License",
            "Mozilla Public License 2.0",
            "Apache License 2.0",
            "MIT License",
            "Boost Software License 1.0",
            "WTFPL",
        ],
    },
];

// TODO: Create a function to write README file

// const genMd = () => generateMarkdown();

function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, err => {
        if (err) throw err;
        console.log('README complete! Check out "README.md" to see your file!');
})};


//THIS IS ONE WAY TO DO THE INIT
// TODO: Create a function to initialize app
// function init() {
//     inquirer.prompt(questions).then((answers) => {
//         console.log(answers);
//         let answerTemp = generateMarkdown(answers);
//         console.log('this is the template amigo'+answerTemp);
//         writeToFile('README.md', answerTemp);
//     })
// };

// THIS IS A MORE ES6 WAY
function init() {
    inquirer.prompt(questions).then((answers) => {
        return generateMarkdown(answers);
    })
    .then((template) => {
        writeToFile('README.md', template);
    }).catch(err => console.log(err));
};



// Function call to initialize app
init();
