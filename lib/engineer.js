const Employee = require('./employee');

class Engineer extends Employee{
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
    }

    getRole(){
        return `<img src="../assets/images/Engineer.png" alt="Engineer"> Engineer`;
    }

    getGithub(){
        return this.github;
    }

    getSpecialData(){
        return `<a href="https://www.github.com/${this.getGithub()}" target="_blank">${this.getGithub()}</a>`;
    }

    getSpecialDataName(){
        return "Github";
    }
}

module.exports = Engineer;