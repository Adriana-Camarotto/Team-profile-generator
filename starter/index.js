const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


//TODO: Write Code to gather information about the development team members, and render the HTML file.

// Create an empty array to hold the team members
const teamMembers = [];

//function to prompt for manager details
function promptManager() {
    return inquirer 
    .prompt([
        {
            type: "input",
            name: "name",
            message: "What is the manager's name?",
        },
        {
            type: "input",
            name: "id",
            message: "What is the manager's ID?",
        },
        {
            type: "input",
            name: "email",
            message: "What is the manager's email?",        
        },
        {
            tyoe: "input",
            name: "officeNumber",
            message: "what is the team manager`s office number?",
        }
    ])
    .then((answers) => {
        const manager = new Manager(
            answers.name,
            answers.id,
            answers.email,
            answers.officeNumber
        );
        teamMembers.push(manager);
        console.log("Manager added successfully!");  
    });
}

// function to prompt for engineer details
function promptEngineer() {
    return inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "What is the engineer's name?",
        },
        {
            type: "input",
            name: "id",
            message: "What is the engineer's ID?",
        },
        {
            type: "input",
            name: "email",
            message: "What is the engineer's email?",        
        },
        {
            type: "input",
            name: "github",
            message: "what is the engineer's github username?",
        },        
    ])
    .then((answers) => {
    
    const engineer = new Engineer(
        answers.name,
        answeres.id,
        answeres.email,
        answers.github
        );
        teamMembers.push(engineer);
        console.log("Engineer added successfully!");
    }); 
}

//function to prompt for intern details
function promptIntern() {
    return inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "What is the intern's name?",
        },
        {
            type: "input",
            name: "id",
            message: "What is the intern's ID?",
        },
        {
            type: "input",
            name: "email",
            message: "What is the intern's email?",        
        },
        {
            type: "input",
            name: "school",
            message: "what is the intern's github username?",
        },        
    ])
    .then((answers) => {
    const intern = new Intern(
        answers.name,
        answeres.id,
        answeres.email,
        answers.school
        );
        teamMembers.push(intern);
        console.log("Intern added successfully!");
    }); 
}

//function to prompt for adding another team member or finishing building the team
function promptTeam() {
    return inquirer
    .prompt([
        {
            type: "list",
            name: "action",
            message: "What woul you like to do next?",
            choices: [
                "Add an engineer",
                "Add an intern",
                "finish building the team",
            ],
        },
    ])
    .then((answers) => {
        switch (answers.action){
            case "add an engineer":
                return promptEnginner().then(() => promptTeam());
            case "Add an intern":
                return promptIntern().then(() => promptTeam());
            default:
                console.log("Team created successfully!");
                return;
        }
    });    
}

//it will overwritten the page-template.js file
fs.writeFile("page-template.js", html, function(err) {
    if (err) throw err;
    console.log("Page created successfully!");
});

