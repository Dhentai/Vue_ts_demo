import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class App extends Vue {
  // 初始化数据
  // msg = 123
  //
  // // 声明周期钩子
  // mounted () {
  //   this.greet()
  // }
  //
  // // 计算属性
  // get computedMsg () {
  //   return 'computed ' + this.msg
  // }
  //
  // // 方法
  // greet () {
  //   alert('greeting: ' + this.msg)
  // }
  decLiteral: number = 6;
  mounted () {
    console.log(this.decLiteral);
    let isDone: boolean = false;
    let decLiteral: number = 6;
    let hexLiteral: number = 0xf00d;
    let binaryLiteral: number = 0b1010;
    let octalLiteral: number = 0o744;
    let name: string = `Gene`;
    let age: number = 37;
    let sentence: string = `Hello, my name is ${name}. I'll be ${age + 1} years old next month.`;

    // let list: number[] = [1, 2, 3];
    let list: Array<number> = [1, 2, 3];
    let x: [string, number] = ['hello', 10];
    enum Color {Red = 2, Green, Blue}
    let c: Color = Color.Green;
    let b: Color = Color.Blue;
    let r: Color = Color.Red;
    console.log(r, c, b);

    let notSure: any = {};
    let other: object = {};
    // notSure = "maybe a string instead";
    // notSure = false; // okay, definitely a boolean
    notSure.ifItExists = () => console.log(1); // okay, ifItExists might exist at runtime
    notSure.ifItExists(); // okay, toFixed exists (but the compiler doesn't check)
    console.log(notSure)
  }
}
