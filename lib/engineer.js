const Employee = require('./employee');

class Engineer extends Employee {
  constructor(github){
    super(name,id,email);
    this.github = github;
  }

  getGithub() {
    console.log(this.github);
  }

  getRole(){
    return Engineer
  }
}
module.exports = Engineer;