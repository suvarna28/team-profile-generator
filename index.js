const inquirer = require('inquirer');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Employee = require('./lib/employee');
const fs = require('fs');

let idArray = [];

const commonQuestions = [{
    type: 'input',
    name: 'name',
    message: 'Enter you name',
    validate: (answer) => {
        if (!answer) {
            return "Please enter a name";
        }
        return true;
    },
},
{
    type: 'input',
    name: 'employeeID',
    message: 'Enter your employee ID',
    validate: (answer) => {
        if (isNaN(answer)) {
            return "Please enter a number";
        }
        idArray.push(answer)
        return true;
    },
},
{
    type: 'input',
    name: 'email',
    message: 'Enter your email address',
},
{
    type: 'list',
    message: 'Please select a option',
    name: 'choices',
    choices: ['Add an engineer', 'Add an intern', 'Finish building your team'],
    }];

// Function that uses inquirer package's prompt method to ask a series of questions to enter the employee info
function init() {
    inquirer.prompt([
        commonQuestions[0],
        commonQuestions[1],
        commonQuestions[2],
        {
            type: 'input',
            name: 'officenumber',
            message: 'Enter your office number',
        },
        commonQuestions[3],
    ])
        .then((data) => {
            //The first person is a manager so create a manager object
            const manager = new Manager(data.name, data.employeeID, data.email, data.officenumber)
            const myHTML = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./dist/style.css">
        <link rel="icon" href="favicon.ico">
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
            //Create index.html file
            fs.writeFile('index.html', myHTML, (err) =>
                err ? console.log(err) : console.log()
            );

            //Write to index.html file and create a card based on manager info
            fs.readFile('index.html', 'utf8', function (err, data) {
                if (err) {
                    return console.log(err);
                }
                const card = addCard(manager);
                let newCard = data.replace(/\<\/section>/g, card + '</section>');
                fs.writeFile('index.html', newCard, 'utf8', function (err) {
                    if (err) return console.log(err);
                });
            });

            //Based on choice selected in the 'Please select a option' question, call addengineer or addintern function 
            if (data.choices === 'Add an engineer') {
                addEngineer();
            } else if (data.choices === 'Add an intern') {
                addIntern();
            } else (data.choices === 'Finish building your team') {
                console.log('Team built successfully!')
            }
        });
}

//Function to add an engineer to the team 
function addEngineer() {
    inquirer.prompt([
        commonQuestions[0],
        commonQuestions[1],
        commonQuestions[2],
        {
            type: 'input',
            name: 'githubusername',
            message: 'Enter your githubusername',
        },
        commonQuestions[3],
    ])
        .then((data) => {

            //Create engineer object
            const engineer = new Engineer(data.name, data.employeeID, data.email, data.githubusername)

            //Write to index.html file and create a card based on emgineer info
            fs.readFile('index.html', 'utf8', function (err, data) {
                if (err) {
                    return console.log(err);
                }
                const card = addCard(engineer);
                let newCard = data.replace(/\<\/section>/g, card + '</section>');
                fs.writeFile('index.html', newCard, 'utf8', function (err) {
                    if (err) return console.log(err);
                });
            });

            //Based on choice selected in the 'Please select a option' question, call addengineer or addintern function
            if (data.choices === 'Add an engineer') {
                addEngineer();
            } else if (data.choices === 'Add an intern') {
                addIntern();
            } else (data.choices === 'Finish building your team') {
                console.log('Team built successfully!')
            }
        });
}

//Function to add an intern to the team 
function addIntern() {
    inquirer.prompt([
        commonQuestions[0],
        commonQuestions[1],
        commonQuestions[2],
        {
            type: 'input',
            name: 'school',
            message: 'Enter your school name',
        },
        commonQuestions[3],
    ])
        .then((data) => {

            //Create intern object
            const intern = new Intern(data.name, data.employeeID, data.email, data.school)

            //Write to index.html file and create a card based on intern info
            fs.readFile('index.html', 'utf8', function (err, data) {
                if (err) {
                    return console.log(err);
                }
                const card = addCard(intern);
                let newCard = data.replace(/\<\/section>/g, card + '</section>');
                fs.writeFile('index.html', newCard, 'utf8', function (err) {
                    if (err) return console.log(err);
                });
            });

            //Based on choice selected in the 'Please select a option' question, call addengineer or addintern function
            if (data.choices === 'Add an engineer') {
                addEngineer();
            } else if (data.choices === 'Add an intern') {
                addIntern();
            } else (data.choices === 'Finish building your team') {
                console.log('Team built successfully!')
            }
        });
}

//Function to add each card based on instance of Manager, Engineer or Intern 
function addCard(employeeHere) {
    let addCard = `<div class="col-md-4 col-sm-12 cardpadding"><div class="card shadow" style="width: 18rem;">
                    <div class="card-body">
                        <p>${employeeHere.getName()}</p>
                            ${(employeeHere instanceof Manager) ? `<p><img src="icon/coffee.ico"> Manager</p>` : ``}
                            ${(employeeHere instanceof Engineer) ? `<p><img src="icon/glasses.ico"> Engineer</p>` : ``}
                            ${(employeeHere instanceof Intern) ? `<p><img src="icon/intern.ico"> Intern</p>` : ``}
                    </div>
                    <div class="items">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${employeeHere.getId()}</li>
                            <li class="list-group-item">Email: <a href="mailto:${employeeHere.getEmail()}">${employeeHere.getEmail()}</a></li>
                            ${(employeeHere instanceof Manager) ? `<li class="list-group-item">Office Number: ${employeeHere.getOfficeNumber()}</li>` : ``}
                            ${(employeeHere instanceof Engineer) ? `<li class="list-group-item">GitHub: <a href="https://github.com/${employeeHere.getGitHub()}" target="_blank" class="card-link">${employeeHere.getGitHub()}</a></li>` : ``}
                            ${(employeeHere instanceof Intern) ? `<li class="list-group-item">School: ${employeeHere.getSchool()}</li>` : ``}
                            
                        </ul>
                    </div>
                </div></div>`;
    return addCard;
}

// Function call that initializes the app
init();

