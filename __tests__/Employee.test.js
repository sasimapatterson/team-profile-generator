const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("Initialization", () => {
        //This should retrun true if there is 'name' inside the object . 
        it("should return an object", () => {
            
            const obj = new Employee();
            // expect(typeof(obj)).toEqual("object");
            expect("name" in obj).toEqual(true);
        });
    });

    describe ("name", () => {
        //this should return the same name value as indicate inside new Emplyee("").
        it("should create new name", () => {

            const obj = new Employee("Rachel");
            expect(obj.name).toEqual("Rachel");
        });
    });

    describe ("Id", () => {
        //this should return the same id value as indicate inside new Employee();
        it("should create new id", () => {

            const obj = new Employee("Rachel", 123);
            expect(obj.id).toEqual(123);
        });
    });

    describe ("email", () => {
        //this should return the same e-mail value as indicate inside new Employee();
        it("should create new id", () => {

            const obj = new Employee("Rachel", 123, "rachel@friends.com");
            expect(obj.email).toEqual("rachel@friends.com");
        });
    });

});
