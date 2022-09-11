const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    //Followed the same pattern as Engineer.js and Manager.js
    super(name, id, email);
    this.school = school;
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return "Intern";
  }

}

module.exports = Intern;
