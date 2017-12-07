class Person{
    // 类不存在变量提升，这里如果将最后一行module.exports = PerSon 调整到这一行之上会出错了。
    constructor(name, age){  // 构造方法
        this.name = name;
        this.age = age;
    }
    introduce(){  // 定义类的方法前不需要加function
        return 'My name is ' + this.name + '. I am ' + this.age.toString() + " years old."
    }
}


module.exports = Person
