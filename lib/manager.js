const Employee = require('./employee');

class Manager extends Employee{
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole(){
        return `<img src="../assets/images/managerwht.png" alt="Manager"> Manager`;
    }

    getOfficeNumber(){
        return this.officeNumber;
    }

    getSpecialData(){
        return this.getOfficeNumber();
    }

    getSpecialDataName(){
        return "Ph #";
    }
}

module.exports = Manager;