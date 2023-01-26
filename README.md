# team-profile-generator

## Description 

This is a Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person.

The application can be invoked by using 'node index.js' command. 

* Once invoked it will ask you a series of questions to enter name, id, email, office number, github username, school name and a multiple choice question to add an engineer or an intern or to finish building your team. The series of questions differ as explained next. 
* The first employee is a manager who creates the rest of the team. Manager is asked to enter name, id, email, office number and the last question is the multiple choice question to add an engineer or an intern or to finish building your team. 
* If you select engineer, it will ask you to enter name, id, email, github username of the engineer and at the last it will again ask the same multiple choice question to add an engineer or an intern or to finish building your team.
* If you select intern, it will ask you to enter name, id, email, school of the intern and at the last it will again ask the same multiple choice question to add an engineer or an intern or to finish building the team.
* When you select 'finish building your team', the application exists with a 'Team built successfully!' message and an index.html file is created with summaries of each entered employee information. 

## Features

* It has 3 validations in total: a non-empty string for 'name', a number for 'ID' and a unique number for each employee ID.
* You have to enter a string for employee name, if you do not enter anything then it will give you a message saying "Please enter a name"
* You have to enter a number for employee ID, if you do not enter a number then it will give you a message saying "Please enter a number".
* If you enter an already entered number for ID, then it will give you a message saying "ID already taken, please enter a new ID", this ensures that each employee is assigned with an unique ID. 

## Installation

N/A

## Screenshot

![Main Webpage](./screenshot/screenshot.png)

## Link to the GitHub repo of the application

https://github.com/suvarna28/team-profile-generator 

## Link to the walkthrough video demonstrating the functionality of the application

https://drive.google.com/file/d/1nbGsxvBP2YiOC-WYOobg9UdkNhw41wVK/view

## Credits

* Our TA, Sebastian for answering homework related doubts. 
* Stackoverflow for 'validate' in prompt inquirer and also for learning how to write to an already existing html file.(https://stackoverflow.com/questions/44127153/how-to-append-a-code-snippet-to-html-using-node-fs)
* Favicon for generating icons for manager, engineer and intern.(https://www.favicon.cc/)
