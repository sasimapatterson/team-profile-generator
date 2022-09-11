const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("Initialization", () => {
        //Set to check if there is 'school' property inside the obj
        it("should return an object", () => {

            const obj = new Intern();

            expect("school" in obj).toEqual(true);
        });
    });

    describe("name", () => {
        //this will return the name from the getName() which is created inside Intern.js
        it("should return the intern's name", () => {

            const obj = new Intern("Joey");
            expect(obj.name).toEqual("Joey");
        });
    });

    describe("Id", () => {
        //this will return id from the getId() which is created inside Intern.js
        it("should return the intern's id", () => {

            const obj = new Intern("Joey", 456);
            expect(obj.id).toEqual(456);
        });
    });

    describe("email", () => {
        //this will return e-mail from the getEmail() which is created inside Intern.js
        it("should return the intern's email", () => {

            const obj = new Intern("Joey", 456, "joey@friends.com");
            expect(obj.email).toEqual("joey@friends.com");
        });
    });

    describe("school", () => {
        //this will return school's name which is created inside Intern.js and only unique to the Intern role.
        it("should return the intern's school's name", () => {

            const obj = new Intern("Joey", 456, "joey@friends.com", "Friendly University");
            expect(obj.school).toEqual("Friendly University");
        });
    });

});
