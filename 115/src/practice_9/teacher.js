import Person from "./person.js";

class Teacher extends Person {
    constructor(id, name, age, klass) {
        super(id, name, age);
        this.klass = klass;
    }

    introduce(){
        let s = "";
        if(this.klass){
            s = " I am a Teacher. I teach " + this.klass.getDisplayName() + ".";
        }else{
            s = " I am a Teacher. I teach No Class.";
        }
        return super.introduce() + s;
    }

    introduceWith(student){
        let s = "";
        if(student.klass.number == this.klass.number){
            s = "I teach Jerry.";
        }else{
            s = "I don't teach Jerry.";
        }
        return super.introduce() + " I am a Teacher. " + s;
    }
}

module.exports = Teacher;
