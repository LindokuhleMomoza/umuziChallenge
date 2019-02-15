
//challenge 1

function check65(number1,number2){
if(number1==65 || number2 ==65){
return true;
}
if(number1+number2==65){
return true;
}
return false;
}
console.log(check65(23,65));

//challenge 2

var s1  = 7;
var s2  = 8;
var s3  = 9;
var allSides = (s1 + s2 + s3)* 1/2;
var allMinusS1 = allSides - s1;
var allMinusS2 = allSides - s2;
var allMinusS3 = allSides - s3;
var area =  Math.sqrt(allSides*(allMinusS1 * allMinusS2 * allMinusS3));
console.log(area);

//challenge 3
var num1 = window.prompt("Enter first number");
var num2 = window.prompt("Enter second number");
var num3 = window.prompt("Enter the third number");

var numLargest = Math.max(num1, num2, num3);

console.log("The largest number is  " +numLargest);

//challenge 4
number = window.prompt("Enter any number");
function time_convert(number)
 { 
  var hours =Math.floor (number / 60);  
  var minutes = number % 60;
  return hours + "hour(s):" + minutes +"minute(s)";         
}

console.log(time_convert(number));

//challenge 5
var fname = window.prompt("Please enter the first name");
var sname = window.prompt("Please enter the second name");



var arr1 = fname.split("");
var arr2 = sname.split("");
var arr3 = [];

for(var i = 0; i < fname.length; i++){
	for(var j = 0; j < sname.length; j++){
    	if(fname[i] == sname[j]){
        	arr3.push(fname[i]);
		}		
	}
}

console.log(arr3);
                 
