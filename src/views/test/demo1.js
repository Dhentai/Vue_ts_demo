var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import Vue from 'vue';
import Component from 'vue-class-component';
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
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
        _this.decLiteral = 6;
        return _this;
    }
    App.prototype.mounted = function () {
        console.log(this.decLiteral);
        var isDone = false;
        var decLiteral = 6;
        var hexLiteral = 0xf00d;
        var binaryLiteral = 10;
        var octalLiteral = 484;
        var name = "Gene";
        var age = 37;
        var sentence = "Hello, my name is " + name + ". I'll be " + (age + 1) + " years old next month.";
        // let list: number[] = [1, 2, 3];
        var list = [1, 2, 3];
        var x = ['hello', 10];
        var Color;
        (function (Color) {
            Color[Color["Red"] = 2] = "Red";
            Color[Color["Green"] = 3] = "Green";
            Color[Color["Blue"] = 4] = "Blue";
        })(Color || (Color = {}));
        var c = Color.Green;
        var b = Color.Blue;
        var r = Color.Red;
        console.log(r, c, b);
        var notSure = {};
        var other = {};
        // notSure = "maybe a string instead";
        // notSure = false; // okay, definitely a boolean
        notSure.ifItExists = function () { return console.log(1); }; // okay, ifItExists might exist at runtime
        notSure.ifItExists(); // okay, toFixed exists (but the compiler doesn't check)
        function keepWholeObject(wholeObject) {
            var a = wholeObject.a, _a = wholeObject.b, b = _a === void 0 ? 1001 : _a;
        }
        keepWholeObject({ a: 'cmn' });
        function f(_a) {
            var _b = _a === void 0 ? { a: '123' } : _a, _c = _b.a, a = _c === void 0 ? '' : _c, _d = _b.b, b = _d === void 0 ? 0 : _d;
            // ...
        }
        f({ a: 'aa' });
        f({ b: 1 });
        f({});
        f();
        function printLabel(labelledObj) {
            // console.log(labelledObj.label);
        }
        var myObj = { size: 10, label: 'Size 10 Object' };
        printLabel(myObj);
        function createSquare(config) {
            var newSquare = { color: 'white', area: 100 };
            if (config.color) {
                // Error: Property 'color' does not exist on type 'SquareConfig'
                newSquare.color = config.color;
            }
            if (config.width) {
                newSquare.area = config.width * config.width;
            }
            return newSquare;
        }
        var myS = { color: 'black', etc: 123, c: 123 };
        var mySquare = createSquare(myS);
        var mySearch;
        mySearch = function (src, sub) {
            var result = src.search(sub);
            return result > -1;
        };
        mySearch('abc', 'b');
        var myArray;
        myArray = ["Bob", "Fred"];
        var myStr = myArray[0];
        var variable = 233;
        var myAdd = function (x, y) { return variable + x + y; };
        var _myAdd = function (x, y) { return variable + x + y; };
        console.log(myAdd(1, 2));
        console.log(_myAdd(1, 2));
        function buildName(firstName) {
            var restOfName = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                restOfName[_i - 1] = arguments[_i];
            }
            return firstName + " " + restOfName.join(" ");
        }
        var employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
        var deck = {
            suits: ["hearts", "spades", "clubs", "diamonds"],
            cards: Array(52),
            createCardPicker: function () {
                var _this = this;
                // NOTE: the line below is now an arrow function, allowing us to capture 'this' right here
                return function () {
                    var pickedCard = Math.floor(Math.random() * 52);
                    var pickedSuit = Math.floor(pickedCard / 13);
                    return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
                };
            }
        };
        var cardPicker = deck.createCardPicker();
        var pickedCard = cardPicker();
        var cmn = function (a) { return a; };
        function cmn1(a) {
            return a;
        }
        var cmn2 = function (a) {
            return a;
        };
        var cmn3 = function (b) { return b; };
        var ui = /** @class */ (function () {
            function ui() {
                this.addClickListener = function (onclick) {
                    var ee = new Event('click');
                    onclick(ee);
                };
            }
            return ui;
        }());
        var Handler = /** @class */ (function () {
            function Handler() {
                var _this = this;
                this.onClickGood = function (e) {
                    console.count('fuck');
                    _this.info = e.type;
                    console.log(_this.info);
                };
            }
            return Handler;
        }());
        var h = new Handler();
        var h1 = new Handler();
        var uiElement = new ui();
        console.log(uiElement);
        uiElement.addClickListener(h.onClickGood);
        uiElement.addClickListener(h1.onClickGood);
        var suits = ["hearts", "spades", "clubs", "diamonds"];
        function pickCard(x) {
            // Check to see if we're working with an object/array
            // if so, they gave us the deck and we'll pick the card
            if (typeof x == "object") {
                return Math.floor(Math.random() * x.length);
            }
            if (typeof x == "number") {
                var pickedSuit = Math.floor(x / 13);
                return { suit: suits[pickedSuit], card: x % 13 };
            }
        }
        var myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
        var pickedCard1 = myDeck[pickCard(myDeck)];
        // alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);
        var pickedCard2 = pickCard(15);
        // alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);
        function identity(arg) {
            return arg;
        }
        console.log(identity('cmn'));
        function loggingIdentity(arg) {
            console.log(arg.length); // Array has a .length, so no more error
            return arg;
        }
        var myIdentity = identity;
        function loggingIdentity2(arg) {
            console.log(arg.length); // Now we know it has a .length property, so no more error
            return arg;
        }
        loggingIdentity2({ length: 10, value: 3 });
        var ttt = { length: 10 };
        function getProperty(obj, key) {
            return obj[key];
        }
        var xxx = { name: 'cmn', length: 3 };
        console.log(getProperty(xxx, 'name'));
        function create(c) {
            return new c();
        }
        var getSomeValue = function (num) { return num; };
        var Response;
        (function (Response) {
            Response[Response["Yes"] = 0] = "Yes";
            Response[Response["No"] = getSomeValue(1)] = "No";
        })(Response || (Response = {}));
        console.log(Response);
        var Direction;
        (function (Direction) {
            Direction[Direction["shit"] = 123] = "shit";
            Direction["Up"] = "UP";
            Direction["Down"] = "DOWN";
            Direction["Left"] = "LEFt";
            Direction["Right"] = "RIGHT";
            Direction[Direction["tt"] = 123] = "tt";
        })(Direction || (Direction = {}));
        console.log(Direction);
        var num1 = 233;
        var E1;
        (function (E1) {
            E1[E1["X"] = 123] = "X";
            E1[E1["Y"] = 6] = "Y";
            E1[E1["Z"] = num1] = "Z";
        })(E1 || (E1 = {}));
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
        var E;
        (function (E) {
            E[E["Foo"] = 0] = "Foo";
            E[E["Bar"] = 1] = "Bar";
        })(E || (E = {}));
        console.log(E);
        var ee = 4;
        // console.log(directions)
        // let tttt : Directions.Up = 12
        // let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right]
        function sda(para) {
            var a = 1;
            para();
        }
        sda(function () { return console.log(1); });
    };
    App = __decorate([
        Component
    ], App);
    return App;
}(Vue));
export default App;
//# sourceMappingURL=demo1.js.map