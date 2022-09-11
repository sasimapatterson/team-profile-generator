const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("Initialization", () => {
        //Set to check if there is 'officeNumber' property inside the obj.
        it("should return an object", () => {

            const obj = new Manager();
            expect("officeNumber" in obj).toEqual(true);
        });
    });

    describe("name", () => {
        //this should return the same name value as indicate inside new Manager("");
        it("should return the manager's name", () => {

            const obj = new Manager("Monica");
            expect(obj.name).toEqual("Monica");
        });
    });

    describe("Id", () => {
        //this should return the same id value as indicate inside new Manager();
        it("should return the manager's id", () => {

            const obj = new Manager("Monica", 456);
            expect(obj.id).toEqual(456);
        });
    });

    describe("email", () => {
        //this should return the e-mail that matches the value inside new Manager("");
        it("should return the manager's email", () => {

            const obj = new Manager("Monica", 456, "monica@friends.com");
            expect(obj.email).toEqual("monica@friends.com");
        });
    });

    describe("officeNumber", () => {
        //this should return the office number that matches the value inside new Manager("");
        it("should return the manager's office number", () => {
            const obj = new Manager("Monica", 456, "monica@friends.com", 1234567);
            expect(obj.officeNumber).toEqual(1234567);
        });
    });
});

