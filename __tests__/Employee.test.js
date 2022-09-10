const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("Initialization", () => {
        //This should return an object which contains method to get name, id and email. 
        it("should return an object", () => {
            
            const obj = new Employee();
            // expect(typeof(obj)).toEqual("object");
            expect("name" in obj).toEqual(true);
        });
    });

    describe ("name", () => {
        //this will return the name from the getName() which is created inside Employee.js
        it("should create new name", () => {

            const obj = new Employee("Rachel");
            expect(obj.name).toEqual("Rachel");
        });
    });

    describe ("Id", () => {
        //this will return id from the getId() which is created inside Employee.js
        it("should create new id", () => {

            const obj = new Employee("Rachel", 123);
            expect(obj.id).toEqual(123);
        });
    });

    describe ("email", () => {
        //this will return e-mail from the getEmail() which is created inside Employee.js
        it("should create new id", () => {

            const obj = new Employee("Rachel", 123, "rachel@friends.com");
            expect(obj.email).toEqual("rachel@friends.com");
        });
    });

});
