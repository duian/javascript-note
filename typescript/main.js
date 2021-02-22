var a = 1;
var b = 2;
// tuple
var t = ['12', 10];
//enum
var Color;
(function (Color) {
    Color[Color["Red"] = 86] = "Red";
    Color[Color["Yellow"] = 83] = "Yellow";
    Color[Color["Blue"] = 25] = "Blue";
})(Color || (Color = {}));
var c = Color.Red;
