// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

import Employee from "./Employee";

class Engineer extends Employee {
    constructor(name, id, email, github) {
    super(name, id, email); 
    // The super keyword is used to call the constructor of its parent class to access the parent's properties and methods.
    this.github = github;
    }

    getGithub(){
        return this.github;
    }
}

module.exports = Engineer; 
