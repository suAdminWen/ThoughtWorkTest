let sinon = require("sinon");
let main = require("../lib/main");

describe('main()', () => {

//     it('should display main menu once started', () => {
//         sinon.spy(console, 'log');
//         main.main();
//         expect(console.log.args.join()).toBe(`1. 添加学生
// 2. 生成成绩单
// 3. 退出
// 请输入你的选择（1～3）：`);
//     });

    it('should print success when given student infomation', () =>{
        sinon.spy(console, 'log');

        let inputs = ["张三, 1, 汉族, 14, 数学: 75, 语文: 95, 英语: 80, 编程: 80",
                      "李四, 2, 汉族, 14, 数学: 85, 语文: 80, 英语: 70, 编程: 90"];
        let result = ["学生张三的成绩被添加", "学生张三的成绩被添加\n学生李四的成绩被添加"];
        for(let i = 0; i < 2; i++){
            main.addStudentAndScore(inputs[i]);
            expect(console.log.args.join("\n")).toBe(result[i]);
        }

    })

    it('should print when given student id list', ()=>{
        let input = "1, 2";
        let result = '学生张三的成绩被添加\n学生李四的成绩被添加\n成绩单\n' +
        '姓名|数学|语文|英语|编程|平均分|总分\n' +
        '========================\n' +
        '张三|75|95|80|80|82.5|330\n' +
        '李四|85|80|70|90|81.25|325\n' +
        '========================\n' +
        '全班总分平均数：327.5\n' +
        '全班总分中位数：330';
        main.printStudentAndScore(input);
        expect(console.log.args.join("\n")).toBe(result);
    })
});
