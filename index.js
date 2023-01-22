const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/employee.js');
const  Manager = require('./lib/manager');
const  Engineer  = require('./lib/engineer');
const  Intern  = require('./lib/intern');


const engineer = () =>{
        [{
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
    ]
}
const intern = () =>{
    
        [{
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
    ];
}

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
            choices: [engineer(), intern()],

        },
        

    ]);














// fs.appendFile(index.html)