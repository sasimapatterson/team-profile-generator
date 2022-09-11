const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("Initialization", () => {
        //Set to check if there is 'school' property inside the obj.
        it("should return an object", () => {

            const obj = new Intern();

            expect("school" in obj).toEqual(true);
        });
    });

    describe("name", () => {
        //this should return the same name value as indicate inside new Intern("");
        it("should return the intern's name", () => {

            const obj = new Intern("Joey");
            expect(obj.name).toEqual("Joey");
        });
    });

    describe("Id", () => {
        //this should return the same id value as indicate inside new Intern();
        it("should return the intern's id", () => {

            const obj = new Intern("Joey", 456);
            expect(obj.id).toEqual(456);
        });
    });

    describe("email", () => {
        //this should return the same e-mail value as indicate inside new Intern("");
        it("should return the intern's email", () => {

            const obj = new Intern("Joey", 456, "joey@friends.com");
            expect(obj.email).toEqual("joey@friends.com");
        });
    });

    describe("school", () => {
        //this should return school's name which is matching the value inside new Intern("");
        it("should return the intern's school's name", () => {

            const obj = new Intern("Joey", 456, "joey@friends.com", "Friendly University");
            expect(obj.school).toEqual("Friendly University");
        });
    });
});
