class Engineer extends Employee{
    constructor(name, id, email, github){

        this.github = github;
    }

    getRole(){
        return "Engineer";
    }

    getGithub(){
        return this.github;
    }
}