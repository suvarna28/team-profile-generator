const Employee = require('./employee');

//Intern class that extends employee class with 'extends' keyword and has a super constructor. Also has school parameter and get function. Also has role get function. 
class Intern extends Employee{ 
    constructor(name, id, email, school) {
        super(name, id, email);

        this.school = school;
    }

    getSchool() { 
        return this.school;
    }

    getRole() {
        return new Intern();
    }
}

module.exports = Intern;
