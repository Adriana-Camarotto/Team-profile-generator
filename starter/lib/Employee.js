// TODO: Write code to define and export the Employee class
export default class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName(){
        return this.name;
    }
    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }
    getId() {
        return this.email;
    }

    getRole(){
        return "Employee";
    }
}
