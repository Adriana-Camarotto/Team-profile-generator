// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
// Import Employee class

const Employee = require(`./Employee`);

class Manager extends Employee { //constructor calls the parent `Employee`
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    // defined getOffficeNumber() method to return the correspondent property
    getOfficeNumber() {
        return this.officeNumber;
    }
    //Override the getRole()method in the subclass to return its own role.
    getRole(){
        return "Manager";
    }
}

module.exports = Manager; //exports `Manager` object from the currente module
