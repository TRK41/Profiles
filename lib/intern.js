const Employee = require('./lib/employee');

class Intern extends Employee {
  constructor(school){
    super(name,id,email);
    this.school = school;
  }

  getSchool(){
    console.log(this.school);
  }

  getRole(){
    return Intern;
  }
}