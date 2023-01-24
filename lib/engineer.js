const Employee = require('./employee');

class Engineer extends Employee{ 
    constructor(name, id, email, github) {
        super();
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
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

    getGitHub() { 
        return this.github;
    }

    getRole() {
        return new Engineer();
    }
}

module.exports = Engineer;
