// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
//import `Employee` class
const Employee = require(`./Employee`);

class Engineer extends Employee {
    constructor(name, id, email, github) { //constructor calls the parent `Employee`
    super(name, id, email); 
    // The super keyword is used to call the constructor of its parent class to access the parent's properties and methods.
    this.github = github;
    }

    // defined getGithub() method to return the correspondent property
    getGithub(){
        return this.github;
    }
    //Override the getRole()method in the subclass to return its own role.
    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer; //exports `Engineer` object from the currente module
