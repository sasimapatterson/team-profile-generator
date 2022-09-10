const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should return an object", () => {

            const obj = new Engineer();

            expect("github" in obj).toEqual(true);
        });
    });

    describe("name", () => {
        //this will return the name from the getName() which is created inside Engineer.js
        it("should return the engineer's name", () => {

            const obj = new Engineer("Ross");
            expect(obj.name).toEqual("Ross");
        });
    });

    describe("Id", () => {
        //this will return id from the getId() which is created inside Engineer.js
        it("should return the engineer's id", () => {

            const obj = new Engineer("Ross", 234);
            expect(obj.id).toEqual(234);
        });
    });

    describe("email", () => {
        //this will return e-mail from the getEmail() which is created inside Engineer.js
        it("should return the engineer's email", () => {

            const obj = new Engineer("Ross", 123, "ross@friends.com");
            expect(obj.email).toEqual("ross@friends.com");
        });
    });

    describe("github", () => {
        //this will return github username from the getGithub() which is created inside Engineer.js and only unique to the engineer role.
        it("should return the engineer's github username", () => {

            const obj = new Engineer("Ross", 123, "ross@friends.com", "ross@github.com");
            expect(obj.github).toEqual("ross@github.com");
        });
    });



});
