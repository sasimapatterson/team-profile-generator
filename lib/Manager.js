// Manager class with additional methods just for the manager role.
const Employee = require("./Employee");

//Employee is the parent class of Manager.
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    // Followed the same pattern as Engineer.js.
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getRole() {
    return "Manager";
  }

  getOfficeNumber() {
    return this.officeNumber;
  }
}

module.exports = Manager;
