export default class User{
    constructor(firstname, lastname, birthdate){
        this.firstname = firstname;
        this.lastname = lastname;
        this.birthdate = birthdate;
    }

    setFirstname(value){
        this.firstname = value;
        return this;
    }

    setLastname(value){
        this.lastname = value;
        return this;
    }

    setBirthDate(value){
        this.birthdate = value;
        return this;
    }
}