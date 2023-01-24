const Employee = require('./employee');

class Intern extends Employee{ 
    constructor(name, id, email, school) {
        super();
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
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

    getSchool() { 
        return this.school;
    }

    getRole() {
        return new Intern();
    }
}

module.exports = Intern;
