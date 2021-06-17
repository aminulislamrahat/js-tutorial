var num = 20;
var num2 = 30;

//document.write(num.toFixed(4)); // only '.' er pore jotogula sonkha ase
//document.write(num.toPrecision(3)); // total jotogula sonkha ase, '.' er age and pore sob milaiya

/*
var st_num = toString(num);
document.write(typeof(st_num));


var st_st = "20";
var n_num = parseInt(st_st);
document.write(typeof(n_num));
document.write(n_num);*/


//document.write(Number(false));


//concatenation

/*document.write("sum of num1 + num 2 is "+num+num2);

document.write(" sum of num1 + num 2 is "+(num+num2));

document.write(" sum of num1 + num 2 is "+(num+num2) + " am I right??");*/


//libary of string

//var text = prompt("kisu ko ailsar haddi : ");
var text1 = "o monu, vala aso??";
var text2 = " jane naaaaaa";
/*
document.write(text.length);
document.write(text.charAt(2));
document.write(text.toUpperCase());
document.write(" ");
document.write(text.toLowerCase());

document.write(text1.concat(text2));*/
document.write(text2.slice(6,8));

var result = num > 30 ? "adult" : num < 18 ? "teenage" : "young" ;
document.write(result);

var c1 = ["a", "b"];
var c2 = ["c", "d"];

var c = c1.concat(c2);
document.write(c);
