import Person from "./person.js";

class Teacher extends Person {
    constructor(id, name, age, klasses) {
        super(id, name, age);
        this.klasses = klasses;
    }

    introduce(){
        let s = "Class ";
        if(this.klasses){
            let length = this.klasses.length;
            for(let i in this.klasses){
                s += this.klasses[i].number;
                if(i < length - 1){
                    s += ", "
                }
            }
            s = " I am a Teacher. I teach " + s + ".";
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

    isTeaching(student){
        for(let i in self.klasses){
            if(self.klasses[i].isIn(student)){
                return true;
            }
        }
        return false;
    }
}

module.exports = Teacher;
