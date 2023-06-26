console.clear()
var num1=10;
var num2= 10.9;
var num3= 15;
//type of num1
console.log(typeof(num1));
//type of num2
console.log(typeof(num2));
//sum
var sum= num3+num1+num2;
console.log(sum);
//diff
var diff= num3-num2-num1;
console.log(diff);
//multiplication
var mult= num3*num2*num1;
console.log(mult);
//division
var div=(num3/num1)/num2;
console.log(div);
//remainder
var rem= (num3%num1)%num2;
console.log(rem);
//for infinitey
var num= 3/0;
console.log(num)
// if divided by alphabet
var numal = 3/'A';
console.log(numal)
console.log(typeof(numal))

//number -functions
var num1=10;
// conversionb to string
var str1=String(num1);
console.log(str1);
//or
console.log(num1.toString());
//parseInt() string numerical as input returns a number
var str2 = '3.1467854';
var str3 = '12'
console.log(parseFloat(str2));
console.log(parseInt(str3));
// toFixed() takes floating num and roundoof 
var str_float= 87.987653;
console.log(str_float.toFixed());
console.log(str_float.toFixed(3));
// to get quoates on a string
var doublequotes= 'this is a \'javascript\'string';
console.log(doublequotes);