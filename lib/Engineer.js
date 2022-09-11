// Engineer class with additional methods just for the engineer role.
const Employee = require("./Employee");

// Employee is the parent class of the Engineer. 
class Engineer extends Employee {
  constructor(name, id, email, github) {
   //Use 'super' constructor in order to access 'this.name, this.id, this.email'.
    super(name, id, email);
    this.github = github;
  };

  getRole() {
    return "Engineer";
  };

  getGithub() {
    return this.github;
  }
};


module.exports = Engineer;
