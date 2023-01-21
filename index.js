const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/employee');
const { Managers } = require('./lib/manager');
const { Engineers } = require('./lib/engineer');
const { Interns } = require('./lib/intern');

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
        {
            type: 'list',
            message: 'Would you like add more team members',
            name: 'team members',
            choices: ['Engineer', 'Intern'],
        },
        {
            type: 'input',
            message: 'Please enter engineers name',
            name: 'name',

        },
        {
            type: 'input',
            message: 'Please enter engineers employee Id ',
            name: 'id', 
        },
        {
            type: 'input',
            message: 'Please enter engineers email address ',
            name: 'email', 
        },
        {
            type: 'input',
            message: 'Please enter engineers github',
            name: 'github', 
        },












    ])














fs.appendFile(index.html)