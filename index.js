// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated

const inquirer = require('inquirer');

// Function that uses inquirer package's prompt method to ask a series of questions to the users to create the README file
function init() { 
    inquirer.prompt([
        {
            type: 'input',
            name: 'managername',
            message: 'Enter you name',
        },
        {
            type: 'input',
            name: 'employeeID',
            message: 'Enter your employee ID',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address',
        },
        {
            type: 'input',
            name: 'officenumber',
            message: 'Enter your office number',
        },
        {
            type: 'list',
            message: 'Please select a option',
            name: 'choices',
            choices: ['Add an engineer', 'Add an intern', 'Finish building your team'],
        },
    ])
    .then((data) => {
        console.log('Team built successfully!')
    });
}

// Function call that initializes the app
init();