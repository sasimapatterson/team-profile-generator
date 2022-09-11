const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("Initialization", () => {
        //Set to check if there is 'github' property inside the object.
        it("should return an object", () => {

            const obj = new Engineer();

            expect("github" in obj).toEqual(true);
        });
    });

    describe("name", () => {
        //this should return the same name value as indicate inside new Engineer("");
        it("should return the engineer's name", () => {

            const obj = new Engineer("Ross");
            expect(obj.name).toEqual("Ross");
        });
    });

    describe("Id", () => {
        //this should return the same id value as indicate inside new Engineer();
        it("should return the engineer's id", () => {

            const obj = new Engineer("Ross", 234);
            expect(obj.id).toEqual(234);
        });
    });

    describe("email", () => {
        //this should return the same e-mail value that indicate inside new Engineer("");
        it("should return the engineer's email", () => {

            const obj = new Engineer("Ross", 123, "ross@friends.com");
            expect(obj.email).toEqual("ross@friends.com");
        });
    });

    describe("github", () => {
        //this should return the same github username value as indicate inside new Engineer("");
        it("should return the engineer's github username", () => {

            const obj = new Engineer("Ross", 123, "ross@friends.com", "ross@github.com");
            expect(obj.github).toEqual("ross@github.com");
        });
    });
});
