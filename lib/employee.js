//Employee class with constructor along with name, id, email parameters and respective get functions. Also has role get function. 

class Employee {
    constructor(name, id, email) {

        if (typeof name !== "string" || !name.trim().length) {
            throw new Error("Expected parameter 'name' to be a non-empty string");
        }
        
        if (typeof parseInt(id) !== "number" || isNaN(parseInt(id)) || parseInt(id) < 0) {
            throw new Error("Expected parameter 'id' to be a non-negative number");
        }
        
        this.name = name;
        this.id = id;
        this.email = email;
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

    getRole() {
        return new Employee();
    }
}

module.exports = Employee;
