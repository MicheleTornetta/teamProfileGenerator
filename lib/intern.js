const Employee = require('./employee');

class Intern extends Employee{
    constructor(name, id, email, school){
        super(name, id, email);       
        this.school = school;
    }

    getRole(){
        return `<img src="../assets/images/internwht.png" alt="Intern"> Intern`;
    }

    getSchool(){
        return this.school;
    }

    getSpecialData(){
        return this.getSchool();
    }

    getSpecialDataName(){
        return "School Name";
    }

}

module.exports = Intern;