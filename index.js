const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const fs = require('fs');
const team = require('./src/page-template');

// TODO: CODE GOES HERE
// const init = () => { }
inquirer.prompt ([ 
    { //Manager
        type: 'input',
        message: "Please enter your team member's name.",
        name: 'name',
    },
    {
        type: 'input',
        message: "Please enter your team member's employee ID.",
        name: 'id',
    },
    {
        type: 'input',
        message: "Please enter your team member's email.",
        name: 'email',
    },
    {
        type: 'input',
        message: "Please enter your team member's office number.",
        name: 'officeNumber',
    },
    {//Engineer
        type: 'list',
        message: "Would you like to add another team memeber?",
        name: 'role',
        choice: [
            'Engineer',
            'Intern',
            'None',
        ],
    },
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
    },
    { //Intern
        type: 'input',
        message: "Would you like to add another team member?",
        name: 'role',
        choices: [
            'Engineer',
            'Intern',
            'None',
        ]
    },
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
])
// .then((answers) => {
//     console.log(answers);
//     module.exports = team => {
//         return `<!DOCTYPE html>
//         <html lang="en">
//             <head>
//                 <meta charset="UTF-8" />
//                 <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//                 <meta http-equiv="X-UA-Compatible" content="ie=edge" />
//                 <title>My Team</title>
//                 <link rel="stylesheet" href="style.css">
//                 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css">
//             </head>
//             <body>
//                 <header>
//                     <h1>My Team</h1>
//                 </header>
//                 <main>
//                     ${generateTeam(team)}
//                 </main>
//             </body>
//         </html>
//             `;
        
//         };
        
//     }); 
// console.log(team);