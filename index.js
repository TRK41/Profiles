const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/employee.js');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');


const teamBuilder = () => {
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'What types of team members would you like to add?',
                name: 'team members',
                choices: [Manager, Engineer, Intern, done]
            }
        ]).then(function (userInput) {
            switch (userInput.teamBuilder) {
                case Manager:
                    addManager();
                    break;
                case Engineer:
                    addEngineer();
                    break;
                case Intern:
                    addIntern();
                    break;
            }
        })
}



const addManager = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Please enter team managers name',
                name: 'name',

            },
            {
                type: 'input',
                message: 'Please enter team managers employee Id ',
                name: 'id',
            },
            {
                type: 'input',
                message: 'Please enter team managers email address ',
                name: 'email',
            },
            {
                type: 'input',
                message: 'Please enter team managers Office number ',
                name: 'office number',
            },
        ])
        
}



const addEngineer = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Please enter engineers name',
                name: 'Engineer name',

            },
            {
                type: 'input',
                message: 'Please enter engineers employee Id ',
                name: 'Engineer id',
            },
            {
                type: 'input',
                message: 'Please enter engineers email address ',
                name: 'Engineer email',
            },
            {
                type: 'input',
                message: 'Please enter engineers github',
                name: 'github',
            },
        ])
}
const addIntern = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Please enter engineers name',
                name: 'intern name',

            },
            {
                type: 'input',
                message: 'Please enter engineers employee Id ',
                name: 'Intern id',
            },
            {
                type: 'input',
                message: 'Please enter engineers email address ',
                name: 'Intern email',
            },
            {
                type: 'input',
                message: 'Please enter the school name',
                name: 'school',
            },
        ]);
}











// fs.appendFile(index.html)