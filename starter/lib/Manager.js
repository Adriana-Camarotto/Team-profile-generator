// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
// Improt Emplyee class

import Employee from `./Employee`;

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber =officeNumber;
    }

    getOffficeNumber() {
        return this.officeNumber;
    }

    getRole(){
        return `Manager`;
    }
}

module.exports = Manager;
