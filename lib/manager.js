const Employee = require('./employee');

//Manager class that extends employee class with 'extends' keyword and has a super constructor. Also has office number parameter and get function. Also has role get function. 
class Manager extends Employee {

    constructor(name, id, email, officeNumber) {
        super(name, id, email);

        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return new Manager();
    }
}

module.exports = Manager;


