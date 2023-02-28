//import necessary modules and classes
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const pageTemplate = require("./src/page-template")
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("../starter/src/page-template.js");


//TODO: Write Code to gather information about the development team members, and render the HTML file.

// Create an empty array to hold the team members
const teamMembers = [];

//function to prompt for manager details
function promptManager() {
    //use inquirer to prompt for manager information
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
            type: "input",
            name: "officeNumber",
            message: "what is the team manager`s office number?",
        },
    ])
    .then((answers) => {
        //create a new manager object with the imput values
        let manager = new Manager(
            answers.name,
            answers.id,
            answers.email,
            answers.officeNumber
        );
        //added the manager object to the employees array
        teamMembers.push(manager);
        console.log("Manager added successfully!");
        //call menu to continue
        promptMenu();  
    })
}; //end the function

// function to prompt for engineer details
function promptEngineer() {
    //use inquirer to prompt for engineer information
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
    //create a new engineer object with the imput values
    let engineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.github
        );
        //add the engineer object to the employees array
        teamMembers.push(engineer);
        console.log("Engineer added successfully!");
        //call menu to continue
        promptMenu();  
    }) 
}; //end the function

//function to prompt for intern details
function promptIntern() {
    //use inquirer to prompt for intern information
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
    //create an new Inter object with the input values
    const intern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.school
        );
        // add the intern object to the employees array
        teamMembers.push(intern);
        console.log("Intern added successfully!");
        //call menu to continue
        promptMenu();  
    }) 
}; //end the function

//function to prompt for adding another team member or finishing building the team
function promptMenu() {
    //use inquirer to prompt the user to add another team member or finish building the team
    return inquirer
    .prompt([
        {
            type: "list",
            name: "menu",
            message: "What would you like to do next?",
            choices: [
                "Add a Manager",
                "Add an engineer",
                "Add an intern",
                "finish building the team",
            ],
        },
    ])
    .then((answers) => {
        //depending on the user`s choice, call the apropriate prompt fucntion or generate the HTML file
        switch (answers.menu){                 
            case "Add an engineer":
                promptEngineer();
                break;
            case "Add an intern":
                promptIntern();
                break;
            default:
                buildTeam();
        }
    })    
};

    

    //it will overwritten the page-template.js file
    
   

    const buildTeam = () => {
        console.log(`
        ===============
        Finished building my team!
        ===============
        `);
    
        // Create the output directory if the output path doesn't exist
        if (!fs.existsSync(OUTPUT_DIR)) {
            fs.mkdirSync(OUTPUT_DIR)
        }
        fs.writeFileSync(outputPath, pageTemplate(teamMembers), "utf-8");
    }
    
    promptManager();