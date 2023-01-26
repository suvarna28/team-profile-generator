const Intern = require('../lib/intern');

describe("Intern", () => {
    describe("Initialization", () => {

        //Test to check the created object
        it("should create an object with a name, id, email and school name if valid arguments are provided", () => {
            const intern = new Intern("Suvarna", 3, "jadhav.suvarna28@gmail.com", "GWU");

            expect(intern.name).toEqual("Suvarna");
            expect(intern.id).toEqual(3);
            expect(intern.email).toEqual("jadhav.suvarna28@gmail.com");
            expect(intern.school).toEqual("GWU");
        });

        // Test to check if 'name' is a string 
        it("should throw an error if 'name' is not a string", () => {
            const intern = () => new Intern(3, 3, "jadhav.suvarna28@gmail.com", "GWU");
            const err = new Error("Expected parameter 'name' to be a non-empty string");

            expect(intern).toThrowError(err);
        });

        //Test to check if 'id' is a number
        it("should throw an error if 'id' is not a number", () => {
            const intern = () => new Intern("Suvarna", "Three", "jadhav.suvarna28@gmail.com", "GWU");
            const err = new Error("Expected parameter 'id' to be a non-negative number");

            expect(intern).toThrowError(err);
        });

        //Test to check if 'id' is not a negative number
        it("should throw an error if 'id' is less than 0", () => {
            const intern = () => new Intern("Suvarna", -1, "jadhav.suvarna28@gmail.com", "GWU");
            const err = new Error("Expected parameter 'id' to be a non-negative number");

            expect(intern).toThrowError(err);
        });
    });
});