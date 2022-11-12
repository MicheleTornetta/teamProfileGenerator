const Employee = require('./employee');

class Engineer extends Employee{
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
    }

    getRole(){
        return "Engineer";
    }

    getGithub(){
        return this.github;
    }

    getSpecialData(){
        return this.getGithub();
    }

    getSpecialDataName(){
        return "Github";
    }
}

module.exports = Engineer;