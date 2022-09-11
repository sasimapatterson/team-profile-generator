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
        //this will return the name from the getName() which is created inside Manager.js
        it("should return the manager's name", () => {

            const obj = new Manager("Monica");
            expect(obj.name).toEqual("Monica");
        });
    });

    describe("Id", () => {
        //this will return id from the getId() which is created inside Manager.js
        it("should return the manager's id", () => {

            const obj = new Manager("Monica", 456);
            expect(obj.id).toEqual(456);
        });
    });

    describe("email", () => {
        //this will return e-mail from the getEmail() which is created inside Manager.js
        it("should return the manager's email", () => {

            const obj = new Manager("Monica", 456, "monica@friends.com");
            expect(obj.email).toEqual("monica@friends.com");
        });
    });

    describe("officeNumber", () => {
        //this will return the office number which is created inside Manager.js and only unique to the Manager role.
        it("should return the manager's office number", () => {
            const obj = new Manager("Monica", 456, "monica@friends.com", 1234567);
            expect(obj.officeNumber).toEqual(1234567);
        });
    });
    

});

