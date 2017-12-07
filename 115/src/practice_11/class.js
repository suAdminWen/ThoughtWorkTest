class Class{
    constructor(number){
        this.number = number;
    }

    getDisplayName(){
        return "Class " + this.number;
    }

    assignLeader(student){
        if(this.isIn(student)){
            this.leader = student;
            if(this.teacher){
                console.log("I am " + this.teacher.name + ". I know " + this.leader.name + " become Leader of " + this.getDisplayName() + ".")
            }
        }else{
            console.log("It is not one of us.");
        }

    }

    appendMember(student){
        student.klass = this;
        if(this.teacher){
            console.log("I am " + this.teacher.name + ". I know " + student.name + " has joined " + this.getDisplayName() + ".")
        }

    }

    isIn(student){
        if(student.klass.number == this.number){
            return true;
        }else{
            return false;
        }
    }

    registerAssignLeaderListener(teacher){
        this.teacher = teacher;
    }

    registerJoinListener(teacher){
        this.teacher = teacher;
    }
}

module.exports = Class;
