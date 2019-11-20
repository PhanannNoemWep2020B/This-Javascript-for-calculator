number1 = 300;
number2 = 500;

var sum = 0;
var minus = 0;
var multi = 0;
var divide = 0;

sum = number1 + number2;
minus = number1 - number2;
multi = number1 * number2;
divide = number1 / number2;

document.getElementById("box1").innerHTML = sum;
document.getElementById("box2").innerHTML = minus;
document.getElementById("box3").innerHTML = multi;
document.getElementById("box4").innerHTML = divide;