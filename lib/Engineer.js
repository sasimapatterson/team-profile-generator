const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
   //Got notified during the test that must call 'super' constructor in order to access 'this'
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
