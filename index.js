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
            const myHTML = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./dist/style.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
        <title>Team Profile</title>
    </head>
    
    <body>
        <header>
            <h4>My Team</h4>
        </header>
        <main>
            <section class="row" id="createcards">
            
            </section>
        </main>
    </body>
    
    </html>`;

            fs.writeFile('index.html', myHTML, (err) =>
                err ? console.log(err) : console.log()
            );

            fs.readFile('index.html', 'utf8', function (err, data) {
                if (err) {
                    return console.log(err);
                }

                let addCard = `<div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <p>${manager.getName()}</p>
                        <p>Manager</p>
                    </div>
                    <div class="items">
                        <ul class="list-group">
                            <li class="list-group-item">${manager.getId()}</li>
                            <li class="list-group-item">${manager.getEmail()}</li>
                            <li class="list-group-item">${manager.getOfficeNumber()}</li>
                        </ul>
                    </div>
                </div>`;

                let result = data.replace(/\<\/section>/g, addCard + '</section>');

                fs.writeFile('index.html', result, 'utf8', function (err) {
                    if (err) return console.log(err);
                });
            });

            if (data.choices === 'Add an engineer') {
                addEngineer();
            }
            if (data.choices === 'Add an intern') {
                addIntern();
            }
            if (data.choices === 'Finish building your team') {
                console.log('Team built successfully!')
            }
        });
}

function addEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'engineername',
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
            name: 'githubusername',
            message: 'Enter your githubusername',
        },
        {
            type: 'list',
            message: 'Please select a option',
            name: 'choices',
            choices: ['Add an engineer', 'Add an intern', 'Finish building your team'],
        },
    ])
        .then((data) => {
            const engineer = new Engineer(data.engineername, data.employeeID, data.email, data.githubusername)
            console.log(engineer);

            fs.readFile('index.html', 'utf8', function (err, data) {
                if (err) {
                    return console.log(err);
                }

                let addCard = `<div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <p>${engineer.getName()}</p>
                        <p>Engineer</p>
                    </div>
                    <div class="items">
                        <ul class="list-group">
                            <li class="list-group-item">${engineer.getId()}</li>
                            <li class="list-group-item">${engineer.getEmail()}</li>
                            <li class="list-group-item">${engineer.getGitHub()}</li>
                        </ul>
                    </div>
                </div>`;

                let result = data.replace(/\<\/section>/g, addCard + '</section>');

                fs.writeFile('index.html', result, 'utf8', function (err) {
                    if (err) return console.log(err);
                });
            });

            if (data.choices === 'Add an engineer') {
                addEngineer();
            }
            if (data.choices === 'Add an intern') {
                addIntern();
            }
            if (data.choices === 'Finish building your team') {
                console.log('Team built successfully!')
            }
        });
}

function addIntern() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'internname',
            message: 'Enter you name',
        },
        {
            type: 'input',
            name: 'internID',
            message: 'Enter your intern ID',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address',
        },
        {
            type: 'input',
            name: 'school',
            message: 'Enter your school name',
        },
        {
            type: 'list',
            message: 'Please select a option',
            name: 'choices',
            choices: ['Add an engineer', 'Add an intern', 'Finish building your team'],
        },
    ])
        .then((data) => {
            const intern = new Intern(data.internname, data.internID, data.email, data.school)
            console.log(intern);

            fs.readFile('index.html', 'utf8', function (err, data) {
                if (err) {
                    return console.log(err);
                }

                let addCard = `<div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <p>${intern.getName()}</p>
                        <p>Intern</p>
                    </div>
                    <div class="items">
                        <ul class="list-group">
                            <li class="list-group-item">${intern.getId()}</li>
                            <li class="list-group-item">${intern.getEmail()}</li>
                            <li class="list-group-item">${intern.getSchool()}</li>
                        </ul>
                    </div>
                </div>`;

                let result = data.replace(/\<\/section>/g, addCard + '</section>');

                fs.writeFile('index.html', result, 'utf8', function (err) {
                    if (err) return console.log(err);
                });
            });
            if (data.choices === 'Add an engineer') {
                addEngineer();
            }
            if (data.choices === 'Add an intern') {
                addIntern();
            }
            if (data.choices === 'Finish building your team') {
                console.log('Team built successfully!')
            }
        });
}

// Function call that initializes the app
init();