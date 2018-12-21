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
        console.log(notSure);
    };
    App = __decorate([
        Component
    ], App);
    return App;
}(Vue));
export default App;
//# sourceMappingURL=demo1.js.map