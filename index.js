const inquirer = require('inquirer');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const fs = require('fs');

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
            const manager = new Manager(data.managername, data.employeeID, data.email, data.officenumber)
            console.log(manager);
        })
    }

// Function call that initializes the app
init();