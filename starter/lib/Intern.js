// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

import Employee from "./Employee";

class Intern extends Employee {
    constructor(name, id, email, school) { // the constructor calls the parent `Employee`
        super(name, id, email); // `super` keyword
        this.school = school;    
    }

    // defined getSchool() method to return the correspondent property
    getSchool(){
        return this.school;
    }

    //Override the getRole()method in the subclass to return its own role.
    getRole() {
        return "Intern";
    }
}

module.exports = Intern; //exports `Intern` object from the currente module

