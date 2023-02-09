const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/employee.js');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const createTeam = require('./src/teamHtml.js')
const team = [];


const teamBuilder = () => {
    return inquirer
        .prompt([
            {
                type: 'list',
                message: 'What types of team members would you like to add?',
                name: 'teamMembers',
                choices: ["Manager", "Engineer", "Intern", "done"]
            }
        ]).then(function (answer) {
            switch (answer.teamMembers) {
                case "Manager":
                    addManager();
                    break;
                case "Engineer":
                    addEngineer();
                    break;
                case "Intern":
                    addIntern();
                    break;
                    
                case "done":    
                    webpageBuilder();
                    break;
            }
        })
    };



    const addManager = () => {
      return inquirer
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
                    name: 'officeNumber',
                },
            ]).then((answer) => {
                const manager = new Manager(answer.name, answer.id, answer.email, answer.officeNumber);
                team.push(manager);
                teamBuilder();
            });

    };



    const addEngineer = () => {
      return inquirer
            .prompt([
                {
                    type: 'input',
                    message: 'Please enter engineers name',
                    name: 'engineerName',

                },
                {
                    type: 'input',
                    message: 'Please enter engineers employee Id ',
                    name: 'engineerId',
                },
                {
                    type: 'input',
                    message: 'Please enter engineers email address ',
                    name: 'engineerEmail',
                },
                {
                    type: 'input',
                    message: 'Please enter engineers github',
                    name: 'github',
                },
            ]).then((answer) => {
                const engineer = new Engineer(answer.engineerName, answer.engineerId, answer.engineerEmail, answer.github);
                team.push(engineer);
                teamBuilder();
            });
    };

    const addIntern = () => {
       return inquirer
            .prompt([
                {
                    type: 'input',
                    message: 'Please enter interns name',
                    name: 'internName',

                },
                {
                    type: 'input',
                    message: 'Please enter interns employee Id ',
                    name: 'internId',
                },
                {
                    type: 'input',
                    message: 'Please enter interns email address ',
                    name: 'internEmail',
                },
                {
                    type: 'input',
                    message: 'Please enter the school name',
                    name: 'school',
                },
            ]).then((answer) => {
                const intern = new Intern(answer.internName, answer.internId, answer.internEmail, answer.school);
                team.push(intern);
                teamBuilder();
            });
    };

const webpageBuilder = () => {
    fs.writeFileSync('./dist/team.html', createTeam(team),"utf-8")
}
const start = () => {
    teamBuilder();
}

start();