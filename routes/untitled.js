// // Callbacks.
// // In JS, functions are just objects.
// // Therefore you can pass functions around your code.

// // ===============THIS==============
// $('btn').click(function(){console.log("Clcik!")});
// // ==========IS THE SAME AS=========
// var clickFunction = function(){console.log("click!")};
// $('btn').click(clickFunction);

// // ======SOMEWHERE IN JQUERY IS THIS======
// var $ = {};

// Consider the following:

// function x(y){
//     return function(z){
//         console.log(y+z)
//     }
// }
// x(2)(3)

// How can you make this work?
// The only way is if x returns a function.
// That function will take a parameter.
// Higher order function = a function that gets passed around.

// ======================
// function print(thingToPrint){
//     console.log(thingToPrint);
// };

// The print function doesn't need to be passed around
// because we have access to it locally. Think Blackjack.
// Deal was a utility function, we called it when we needed it.

// function b(number){
//     let localNum = number * number;
//     print(localNum)
// }

// function c(theString){
//     let localString = theString + " is what was passed";
//     print(localString);
// }

// b(2);
// c("Test")

// Could also make print a prototype of a constructor.
// BUT... what if we didn't have access to the code that needed to run?
// IE what if we didn't have access to print()?

// var a = function(theVar){
//     console.log(theVar)
// }

// var b = function(number, callback){
//     let localNum = number * number;
//     callback(localNum);
// }

// b(3,function(number){console.log(number)})
// // =====YOU CAN ALSO WRITE THIS AS======
// b(3,a)

// var li1ii = [1,3,5,8,9,10]
// var i1iil = [1,3,5,9]
// var il1ii = ['Jim','Indian','Marsh','Glitch']
// var lii1i = function(num){return num % 2 === 0}
// var ill1i = function(str){return str.indexOf('itch') !== -1}

// var l11ii = function(array,functionToRun){
//     var it = false;
//     for(l=0;l<array.length;l++){
//         if(functionToRun(array[l])){
//             console.log(array[l])
//             it = true;
//             break
//         }
//     };
//     if(!it){
//         console.log("false");
//     }
// }

// l11ii(li1ii,lii1i)
// l11ii(i1iil,lii1i)
// l11ii(il1ii,ill1i)

// var students = ['Rissa','Merilee','Chris','Stephen']
// students.map((student,index)=>{
//     console.log(student)
// });









