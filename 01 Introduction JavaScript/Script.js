// function sayHello() {
//      alert("Hello World!")
//     }

// document.write('<h1>This is my first JavaScript Page<h1>');

// // Single line Comment in JavaScript

// /*
//     Multiline Comments
// */
// var 123page;
// var _123page;

// /*
//     Keywords
//     abstract, else, 
// */

// // JavaScript Expressions
// var month =May;


// var pi=3.14;
// var person="are you GOD";
// var answer='Yes I am!';
// document.write(pi+"<br>");
// document.write(person+"<br>");
// document.write(answer+"<br>");



// function myFunction(){
//     var carname="Welcome";
//     document.getElementById("demo").innerHTML=carname;
// }

// var num=10;
// console.log(num)
// console.log(typeof(num))
// var num=false;
// console.log(num)
// console.log(typeof(num))


// var companyName="Google";
// var pi=3.14;
// var year=2013;

// var flag=true;
// var FALSE=false;

// var sayHello=function(){
//     alert("Hello world!");
// }

// //array
// var numberArray=[1,2,3];
// var animals=new Array("Cat","Mouse","Lion");

//object
var person={
    name:'Barack Hussein Obama li',
    age: '51',
    title:'44th President of the United State',

    getinfo:function(){
        return this.name+ " " +this.age;
    }

};

// console.log(companyName)
// console.log(sayHello);
// console.log(numberArray);
// console.log(animals);
// console.log(person)


function myFunction(){
    
    document.getElementById("demo").innerHTML=person.getinfo();
}


