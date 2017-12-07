import Person from "./person.js";


class Teacher extends Person{
    constructor(name, age, klass){
        super(name, age);
        this.klass = klass;
    }

    introduce(){
        let s = "No Class";
        if(this.klass){
            s = "Class " + this.klass;
        }
        return super.introduce() + " I am a Teacher. I teach " + s +".";
    }
}

module.exports = Teacher;
