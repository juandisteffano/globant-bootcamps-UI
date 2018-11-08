/*
Looping a triangle
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
It may be useful to know that you can find the length of a string by writing .length after it.

let abc = "abc";
console.log(abc.length);
// → 3
*/

//while
var cantNiveles = 5;
var i = 0;
while (i<cantNiveles){
    var j=0;
    var line = "";
    while(j <= i){
        line += "#"
        j++;
    }
    console.log(line);
    i++;
}

//for
for(var i = 0; i< cantNiveles; i++){
    var line = "";
    for(var j = 0; j <= i; j++){
        line += "#"
    }
    console.log(line);
}

//Using lenght
var cantNiveles = 5;
for(var line = ""; line.length <= cantNiveles; line += "#"){
    console.log(line);
}


/*
FizzBuzz
Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

(This is actually an interview question that has been claimed to weed out a significant percentage of programmer candidates. So if you solved it, your labor market value just went up.)
*/

//A
for(var i = 1; i <= 100; i++){
    if( (i % 3) == 0){
        console.log("Fizz");
    }else if ((i % 5) == 0){
        console.log("Buzz");
    }else{
        console.log(i);
    }
}

//B
for(var i = 1; i <= 100; i++){
    if( (i % 3) == 0 && (i % 5) != 0){
        console.log("Fizz");
    }else if ((i % 3) != 0 && (i % 5) == 0 ){
        console.log("Buzz");
    }else if ((i % 5) == 0 && (i % 3) == 0){
        console.log("FizzBuzz");
    }else{
        console.log(i);
    }
}


/*
Chessboard
Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

Passing this string to console.log should show something like this:
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #
When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.
*/

var tamGrilla = 8;
var salida = "";
for(var fil = 1; fil <= tamGrilla; fil++){
    for(var col = 1; col <= tamGrilla; col++){
        if( (((fil % 2) != 0) && ((col % 2) == 0)) || ( ((fil % 2) == 0) && ((col % 2) != 0))){
            salida += "#"
        }else{
            salida += " ";
        }
    }
    salida += "\n"
}
console.log(salida);


/*
Minimum
The previous chapter introduced the standard function Math.min that returns its smallest argument. We can build something like that now. Write a function min that takes two arguments and returns their minimum.
*/

function minimo(var1,var2){
    if(var1 < var2){
        return var1;
    }else{
        return var2;
    }
}


/*
Recursion
We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd by using % 2 to see whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:

Zero is even.

One is odd.

For any other number N, its evenness is the same as N - 2.

Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean.

Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?
*/

function isEven(param){
    if(param == 0){
        return true;
    }else if(param == 1){
        return false;
    }else if (param < 0){
        return isEven(-param);
    }else{
        return isEven(param - 2)
    }
}


/*
Bean counting
You can get the Nth character, or letter, from a string by writing "string"[N]. The returned value will be a string containing only one character (for example, "b"). The first character has position 0, which causes the last one to be found at position string.length - 1. In other words, a two-character string has length 2, and its characters have positions 0 and 1.

Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the string.

Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.
*/

function countBs (cadena){
    var count = 0;
    for(var i=0; i<cadena.length; i++){
        if(cadena[i] == "B"){
            count++;
        }
    }
    return count;
}

function countChar(cadena, letra){
    var count = 0;
    for(var i=0; i<cadena.length; i++){
        if(cadena[i] == letra){
            count++;
        }
    }
    return count;
}



/*
The sum of a range
The introduction of this book alluded to the following as a nice way to compute the sum of a range of numbers:

console.log(sum(range(1, 10)));
Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.

Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.

As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used when building the array. If no step is given, the elements go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].
*/

function range(start, end){
    var vecRang = [];
    for(var i=start; i<=end; i++){
        vecRang.push(i);
    }
    return vecRang;
}

function sum(vec){
    var resSum = 0;
    for(var i = 0; i<vec.length; i++){
        resSum += vec[i];
    }
    return resSum;
}

function rangeMod(start, end, step){
    var vecRang = [];
    if(step == undefined){
        step = 1;
    } 
    if(step > 0){
        for(var i=start; i<=end; i += step){
            vecRang.push(i);
        }
    }else{
        for(var i=start; i>=end; i += step){
            vecRang.push(i);
        }
    }
    return vecRang;
}

/*
Reversing an array
Arrays have a reverse method that changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method.

Thinking back to the notes about side effects and pure functions in the previous chapter, which variant do you expect to be useful in more situations? Which one runs faster?
*/

function reverseArray (array){
    var arrayRes = [];
    for(var i = array.length- 1; i >= 0; i--){
        arrayRes.push(array[i]);
    }
    return arrayRes;
}

function reverseArrayInPlace (array){
    for(var i = 0; i < array.length/2; i++){
        var swap = array[i];
        array[i] = array[array.length -1 - i];
        array[array.length -1 - i] = swap;
    }
    return array;
}


/*
A list
Objects, as generic blobs of values, can be used to build all sorts of data structures. A common data structure is the list (not to be confused with array). A list is a nested set of objects, with the first object holding a reference to the second, the second to the third, and so on.

let list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};
The resulting objects form a chain, like this:

A linked list
A nice thing about lists is that they can share parts of their structure. For example, if I create two new values {value: 0, rest: list} and {value: -1, rest: list} (with list referring to the binding defined earlier), they are both independent lists, but they share the structure that makes up their last three elements. The original list is also still a valid three-element list.

Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] 
as argument. Also write a listToArray function that produces an array from a list. Then add a helper 
function prepend, which takes an element and a list and creates a new list that adds the element to 
the front of the input list, and nth, which takes a list and a number and returns the element at the 
given position in the list (with zero referring to the first element) or undefined when there is no 
such element.

If you haven’t already, also write a recursive version of nth.
*/

function arrayToList (array){
    var listRes = null;
    for(var i=array.length-1; i>=0; i--){
        listRes = {value: array[i],
                    rest: listRes};
    }
    return listRes;
}

function listToArray(list){
    var arrayRes = [];
    while(list != null){
        arrayRes.push(list.value);
        list = list.rest;
    }
    return arrayRes;
}

function prepend (val, list){
    return {value: val, rest: list};
}

function nth (list, number){
    var res;
    var count = 0;
    while(list != null){
        if(count == number){
            res = list.value;
        }
        count++;
        list = list.rest;
    }
    return res;
}

//Recursive version
function nth (list, number){
    if (number === 0){
        return list.value
    }else{
        return nth(list.rest, number)
    }
}


/*
Deep comparison
The == operator compares objects by identity. But sometimes you’d prefer to compare the values of 
their actual properties.

Write a function deepEqual that takes two values and returns true only if they are the same value 
or are objects with the same properties, where the values of the properties are equal when compared 
with a recursive call to deepEqual.

To find out whether values should be compared directly (use the === operator for that) or have their 
properties compared, you can use the typeof operator. If it produces "object" for both values, you 
should do a deep comparison. But you have to take one silly exception into account: because of a 
historical accident, typeof null also produces "object".

The Object.keys function will be useful when you need to go over the properties of objects to compare 
them.
*/

function deepEqual(param1, param2) {
    if (param1 === param2){
        return true;
    } 
    
    if (param1 == null || typeof param1 != "object") {
        return false;
    }
    if (param2 == null || typeof param2 != "object") {
        return false;
    }
            
  
    var valsParam1 = Object.keys(param1);
    var valsParam2 = Object.keys(param2);
  
    if (valsParam1.length != valsParam2.length){
        return false;
    }
  
    for (let vals of valsParam1) {
        if (!valsParam2.includes(vals) || !deepEqual(param1[vals], param2[vals])){
         return false;
        }
    }
  
    return true;
  }