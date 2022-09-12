const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const fs = require('fs');
const team = require('./src/page-template');

//  an empty array to collect each set of answers from different groups of employee.
const newTeam = [];

// Create prompts to collect user inputs
inquirer.prompt([
    { //Manager (collecting data for manager's role).
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
        name: 'officeNumber',
    },
]).then(response => { //got the above answers for manager then add to the newTeam array by using .push method.
    const teamManager = new Manager(response.name, response.id, response.email, response.officeNumber);
    newTeam.push(teamManager);
    addTeamMember();
})

// to add team member using switch case. If the user choose to add Engineer then the addEngineer() will be called. If the user choose to add Intern then the addIntern() will be called.
function addTeamMember() {
    inquirer.prompt([

        {
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

// Engineer (collecting data for engineer's role).
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
            default: 'https://github.com',
        }]).then(response => {
            const teamEngineer = new Engineer(response.name, response.id, response.email, response.github);
            newTeam.push(teamEngineer);
            addTeamMember();
        });
}

// Intern (collecting data for intern's role).
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
            name: 'school',
        },
    ]).then(response => {
        const teamIntern = new Intern(response.name, response.id, response.email, response.school);
        newTeam.push(teamIntern);
        addTeamMember();
    });
}

//to exit the app and generate the team.html file which will display all the input that collected from the user's answers above.
function exitApp() {
    fs.writeFileSync('dist/team.html', team(newTeam));
}