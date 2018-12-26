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

    function keepWholeObject (wholeObject: { a: string, b?: number }) {
      let { a, b = 1001 } = wholeObject;
    }

    keepWholeObject({ a: 'cmn' });

    function f ({ a = '', b = 0 } = { a: '123' }): void {
      // ...
    }

    f({ a: 'aa' });
    f({ b: 1 });
    f({});
    f();

    function printLabel (labelledObj: { label: string }) {
      // console.log(labelledObj.label);
    }

    let myObj = { size: 10, label: 'Size 10 Object' };
    printLabel(myObj);

    interface SquareConfig {
      color?: string;
      width?: number;
      [propName: string]: any;
    }

    function createSquare (config: SquareConfig): { color: string; area: number } {
      let newSquare = { color: 'white', area: 100 };
      if (config.color) {
        // Error: Property 'color' does not exist on type 'SquareConfig'
        newSquare.color = config.color;
      }
      if (config.width) {
        newSquare.area = config.width * config.width;
      }
      return newSquare;
    }

    let myS: SquareConfig = { color: 'black', etc: 123, c: 123 };
    let mySquare = createSquare(myS);


    interface SearchFunc {
      (source: string, subString: string): boolean;
    }
    let mySearch: SearchFunc;
    mySearch = function(src, sub): boolean {
      let result = src.search(sub);
      return result > -1;
    };

    mySearch('abc', 'b');


    interface StringArray {
      [index: number]: string;
    }

    let myArray: StringArray;
    myArray = ["Bob", "Fred"];

    let myStr: string = myArray[0];
    let variable: number = 233;

    let myAdd: (xx: number, yy: number) => number =
      function(x, y): number { return variable + x + y; };
    let _myAdd = (x: number, y: number): number => variable + x + y;

    console.log(myAdd(1, 2));
    console.log(_myAdd(1, 2));

    function buildName(firstName: string, ...restOfName: string[]) {
      return firstName + " " + restOfName.join(" ");
    }

    let employeeName: string = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");

    interface Card {
      suit: string;
      card: number;
    }
    interface Deck {
      suits: string[];
      cards: number[];
      createCardPicker(this: Deck): () => Card;
    }
    let deck: Deck = {
      suits: ["hearts", "spades", "clubs", "diamonds"],
      cards: Array(52),
      createCardPicker: function(this: Deck) {
        // NOTE: the line below is now an arrow function, allowing us to capture 'this' right here
        return () => {
          let pickedCard = Math.floor(Math.random() * 52);
          let pickedSuit = Math.floor(pickedCard / 13);

          return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
      }
    };

    let cardPicker = deck.createCardPicker();
    let pickedCard = cardPicker();


    interface UIElement {
      addClickListener(onclick: (this: void, e: Event) => void): void;
    }
    class ui implements UIElement{
      addClickListener = (onclick: (this: void, e: Event) => void) => {
        let ee = new Event('click');
        onclick(ee)
      }
    }

    class Handler {
      info: string;
      onClickGood = (e: Event) => {
        console.count('fuck');
        this.info = e.type;
        console.log(this.info)
      }
    }

    let h = new Handler();
    let h1 = new Handler();
    let uiElement: UIElement = new ui();
    console.log(uiElement);
    uiElement.addClickListener(h.onClickGood);
    uiElement.addClickListener(h1.onClickGood);
  }
}
