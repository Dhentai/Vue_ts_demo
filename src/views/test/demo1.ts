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

    let cmn: (a: string) => string = (a) => { return a};
    function cmn1(a: string): any {
      return a
    }
    let cmn2 = (a: string): any => {
      return a
    };
    let cmn3: (a: string) => string = (b) => b;

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


    let suits = ["hearts", "spades", "clubs", "diamonds"];

    function pickCard(x: {suit: string; card: number; }[]): number;
    function pickCard(x: number): {suit: string; card: number; };
    function pickCard(x): any {
      // Check to see if we're working with an object/array
      // if so, they gave us the deck and we'll pick the card
      if (typeof x == "object") {
        return Math.floor(Math.random() * x.length);
      }
      if (typeof x == "number") {
        let pickedSuit = Math.floor(x / 13);
        return {suit: suits[pickedSuit], card: x % 13};
      }
    }

    let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
    let pickedCard1 = myDeck[pickCard(myDeck)];
    // alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);

    let pickedCard2 = pickCard(15);
    // alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);

    function identity<T>(arg: T): T {
      return arg;
    }
    console.log(identity<string>('cmn'));

    function loggingIdentity<T>(arg: Array<T>): Array<T> {
      console.log(arg.length);  // Array has a .length, so no more error
      return arg;
    }

    let myIdentity: { <T>(arg: T) : T } = identity;

    interface GenericIdentityFn {
        <T>(arg: T): T;
    }

    interface Lengthwise {
      length: number;
    }

    function loggingIdentity2<T extends Lengthwise>(arg: T): T {
      console.log(arg.length);  // Now we know it has a .length property, so no more error
      return arg;
    }
    loggingIdentity2({length: 10, value: 3});

    let ttt: Lengthwise = {length: 10};

    interface T { name: string, length: number }

    function getProperty(obj: T, key: string) {
      return obj[key];
    }
    let xxx = { name: 'cmn', length: 3 };

    console.log(getProperty(xxx, 'name'));

    function create<T>(c: {new(): T; }): T {
      return new c();
    }

    let getSomeValue: (arg: number) => number = (num) => num;

    enum Response {
      Yes,
      No = getSomeValue(1)
    }

    console.log(Response);

    enum Direction {
      shit = 123,
      Up = "UP",
      Down = "DOWN",
      Left = "LEFt",
      Right = "RIGHT",
      tt = shit
    }
    console.log(Direction);

    let num1 :number = 233;

    enum E1 { X = Direction.shit, Y = 6, Z = num1}
    console.log(E1);

    // enum ShapeKind {
    //   Circle,
    //   Square,
    // }
    //
    // interface Circle {
    //   kind: ShapeKind.Circle;
    //   radius: number;
    // }
    //
    // interface Square {
    //   kind: ShapeKind.Square;
    //   sideLength: number;
    // }

    // let c: Circle = {
    //   kind: ShapeKind.Square,
    //   //    ~~~~~~~~~~~~~~~~ Error!
    //   radius: 100,
    // }
    enum E {
      Foo,
      Bar
    }
    console.log(E);

    let ee : E = 4;

    // console.log(ee !== E.Foo || ee !== E.Bar)

    // function ff(x: E) {
    //   if (x !== E.Foo || x !== E.Bar) {
    //     //             ~~~~~~~~~~~
    //     // Error! Operator '!==' cannot be applied to types 'E.Foo' and 'E.Bar'.
    //   }
    // }
    const enum Directions {
      Up,
      Down,
      Left,
      Right
    }
    // console.log(directions)
    // let tttt : Directions.Up = 12
    // let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right]


    function sda(para: Function) {
      let a = 1;
      para()
    }

    sda((): void => console.log(1))

  }
}
