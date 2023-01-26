const Employee = require('../lib/Employee');

describe("Employee", () => {
    describe("Initialization", () => {
        it("should create an object with a name, id, and email if valid arguments are provided", () => {
            const employee = new Employee("Suvarna", 3, "jadhav.suvarna28@gmail.com");

            expect(employee.name).toEqual("Suvarna");
            expect(employee.id).toEqual(3);
            expect(employee.email).toEqual("jadhav.suvarna28@gmail.com");
        });

        it("should throw an error if 'name' is not a string", () => {
            const employee = () => new Employee(3, 3, "jadhav.suvarna28@gmail.com");
            const err = new Error("Expected parameter 'name' to be a non-empty string");

            expect(employee).toThrowError(err);
        });

        it("should throw an error if 'id' is not a number", () => {
            const employee = () => new Employee("Suvarna", "Three", "jadhav.suvarna28@gmail.com");
            const err = new Error("Expected parameter 'id' to be a non-negative number");

            expect(employee).toThrowError(err);
        });

        it("should throw an error if 'id' is less than 0", () => {
            const employee = () => new Employee("Suvarna", -1, "jadhav.suvarna28@gmail.com");
            const err = new Error("Expected parameter 'id' to be a non-negative number");

            expect(employee).toThrowError(err);
        });
    });
});