// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badges = license.split(' ').join('%20');
  return `https://img.shields.io/badge/${badges}-yellow`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return "";
  }

  return `- [License](#License)`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return "";
  }
  return `
  ----
### License
${license}

  `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.projectTitle} - <img src=${renderLicenseBadge(data.license)}/>

  ## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Test Instructions](#test-instructions)
- [Questions](#questions)
${renderLicenseLink(data.license)}
-----------------------
## Description

${data.description}

-----------------------
## Installation

${data.installation}

-----------------------
## Usage

${data.usage}

-----------------------
## Contribution

${data.contribution}

-----------------------
## Test-Instructions

${data.tests}

-----------------------
## Questions

For any questions, comments, concerns, or any type of feedback; please email @[${data.email}](mailto:${data.email})
  [Github Profile](https://github.com/${data.githubUser})

${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
