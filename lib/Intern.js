// Intern class with additional methods just for the intern role.
const Employee = require("./Employee");

//Employee is the parent class of Intern.
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
