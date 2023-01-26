const Manager = require('../lib/manager');

describe("Manager", () => {
    describe("Initialization", () => {

        //Test to check the created object
        it("should create an object with a name, id, email and office number if valid arguments are provided", () => {
            const manager = new Manager("Suvarna", 3, "jadhav.suvarna28@gmail.com", "2024457523");

            expect(manager.name).toEqual("Suvarna");
            expect(manager.id).toEqual(3);
            expect(manager.email).toEqual("jadhav.suvarna28@gmail.com");
            expect(manager.officeNumber).toEqual("2024457523");
        });

        // Test to check if 'name' is a non-empty string 
        it("should throw an error if 'name' is not a string", () => {
            const manager = () => new Manager(3, 3, "jadhav.suvarna28@gmail.com", "2024457523");
            const err = new Error("Expected parameter 'name' to be a non-empty string");

            expect(manager).toThrowError(err);
        });

        //Test to check if 'id' is a number
        it("should throw an error if 'id' is not a number", () => {
            const manager = () => new Manager("Suvarna", "Three", "jadhav.suvarna28@gmail.com", "2024457523");
            const err = new Error("Expected parameter 'id' to be a non-negative number");

            expect(manager).toThrowError(err);
        });

        //Test to check if 'id' is not a negative number
        it("should throw an error if 'id' is less than 0", () => {
            const manager = () => new Manager("Suvarna", -1, "jadhav.suvarna28@gmail.com", "2024457523");
            const err = new Error("Expected parameter 'id' to be a non-negative number");

            expect(manager).toThrowError(err);
        });
    });
});