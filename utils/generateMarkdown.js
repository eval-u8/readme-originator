// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `https://img.shields.io/badge/${license}-yellow`;
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
${data.license}
  `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.projectTitle} - <img src=${renderLicenseBadge(data.license)}/>
  ------
  ## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Test Instructions](#test-instructions)
- [Questions](#questions)
${renderLicenseLink()}
------
### Description
${data.description}
----
### Installation
${data.installation}
----
### Usage
${data.usage}
----
### Contribution
${data.contribution}
----
### Test-Instructions
${data.tests}
----
### Questions
[Github Profile](https://github.com/${data.githubUser})
[${data.email}](mailto:${data.email})
${renderLicenseSection()}





Weather Forecaster is a simple basic weather dashboard that shows the weather outlook for multiple cities depending on user input. It was build using the [OpenWeather](https://openweathermap.org/) API, as well as HTML, CSS, JavaScript, [Bootstrap](https://getbootstrap.com/) and [Moment.js](https://momentjs.com/).

## Quirks 🎯

Weather Forecaster will remember previously searched cities! And shows 5 days in advance.


## Preview 👀
[Live page](https://evalecillos.github.io/weather-forecaster/)
![Preview](./assets/images/preview.png)

## License 📓
[MIT](https://choosealicense.com/licenses/mit/)

`;
}

module.exports = generateMarkdown;
