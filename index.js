const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const fs = require('fs');
const team = require('./src/page-template');
//const { exit } = require('process');

// TODO: CODE GOES HERE
// const init = () => { }
inquirer.prompt([
    { //Manager
        type: 'input',
        message: "Please enter your team manager's name.",
        name: 'name',
    },
    {
        type: 'input',
        message: "Please enter your team manager's employee ID.",
        name: 'id',
    },
    {
        type: 'input',
        message: "Please enter your team manager's email.",
        name: 'email',
    },
    {
        type: 'input',
        message: "Please enter your team member's office number.",
        name: 'officeNumber'
    }
   ]).then(response => {
        const teamManager = new Manager(response.name, response.id, response.email);
        console.log(response);
        addTeamMemeber();
    })

function addTeamMemeber() {
    inquirer.prompt([

        {//Engineer
            type: 'list',
            message: "Would you like to add another team memeber?",
            name: 'role',
            choices: [
                'Engineer',
                'Intern',
                'None',
            ],
        }]).then(response => {
            switch (response.role) {
                case 'Engineer':
                    addEngineer()
                    break;
                case 'Intern':
                    addIntern()
                    break;
                case 'None':
                    exitApp();
            }
        })
}

function addEngineer() {

    inquirer.prompt([

        {
            type: 'input',
            message: "Please enter your team member's name.",
            name: 'name',
        },
        {
            type: 'input',
            message: "Please enter your team member's ID.",
            name: 'id',
        },
        {
            type: 'input',
            message: "Please enter your team member's email.",
            name: 'email',
        },
        {
            type: 'input',
            message: "Please enter your team member's GitHub username.",
            name: 'github',
        }]).then(response => {
            const teamEngineer = new Engineer(response.name, response.id, response.email, response.github);
            addTeamMemeber();
        })
}
function addIntern() {
    inquirer.prompt([

        {
            type: 'input',
            message: "Please enter your team member's name.",
            name: 'name',
        },
        {
            type: 'input',
            message: "Please enter your team member's ID.",
            name: 'id',
        },
        {
            type: 'input',
            message: "Please enter your team member's email.",
            name: 'email',
        },
        {
            type: 'input',
            message: "Please enter your team member's school.",
            name: 'github',
        },
    ]).then(response => {
        const teamIntern = new Intern(response.name, response.id, response.email, response.school);
        addTeamMemeber();
    })
}

function exitApp(){

}