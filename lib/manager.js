const Employee = require('./employee');

class Manager extends Employee{

    constructor(name, id, email, officeNumber) {
        super();
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return new Manager();
    }
}

module.exports = Manager;


