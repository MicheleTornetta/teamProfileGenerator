class Intern extends Employee{
    constructor(name, id, email, school){
        
        this.school = school;
    }

    getRole(){
        return "Intern";
    }

    getSchool(){
        return this.school;
    }

}