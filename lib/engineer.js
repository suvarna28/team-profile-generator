const Employee = require('./employee');

//Engineer class that extends employee class with 'extends' keyword and has a super constructor. Also has github parameter and get function. Also has role get function. 
class Engineer extends Employee{ 
    constructor(name, id, email, github) {
        super(name, id, email);

        this.github = github;
    }

    getGitHub() { 
        return this.github;
    }

    getRole() {
        return new Engineer();
    }
}

module.exports = Engineer;
