const Engineer = require('../lib/engineer');

describe("Engineer", () => {
    describe("Initialization", () => {
        
        //Test to check the created object
        it("should create an object with a name, id, email and github username if valid arguments are provided", () => {
            const engineer = new Engineer("Suvarna", 3, "jadhav.suvarna28@gmail.com", "suvarna28");

            expect(engineer.name).toEqual("Suvarna");
            expect(engineer.id).toEqual(3);
            expect(engineer.email).toEqual("jadhav.suvarna28@gmail.com");
            expect(engineer.github).toEqual("suvarna28");
        });

        // Test to check if 'name' is a string 
        it("should throw an error if 'name' is not a string", () => {
            const engineer = () => new Engineer(3, 3, "jadhav.suvarna28@gmail.com", "suvarna28");
            const err = new Error("Expected parameter 'name' to be a non-empty string");

            expect(engineer).toThrowError(err);
        });

        //Test to check if 'id' is a number
        it("should throw an error if 'id' is not a number", () => {
            const engineer = () => new Engineer("Suvarna", "Three", "jadhav.suvarna28@gmail.com", "suvarna28");
            const err = new Error("Expected parameter 'id' to be a non-negative number");

            expect(engineer).toThrowError(err);
        });

        //Test to check if 'id' is not a negative number
        it("should throw an error if 'id' is less than 0", () => {
            const engineer = () => new Engineer("Suvarna", -1, "jadhav.suvarna28@gmail.com", "suvarna28");
            const err = new Error("Expected parameter 'id' to be a non-negative number");

            expect(engineer).toThrowError(err);
        });
    });
});