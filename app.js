//var a = 'Hello World!';
//
//function b() {
//    console.log(a);
//}

//var i = 0;
//var pyr = ['#'];
//
////var abc = "abc";
////console.log(abc.length);
//
//console.log(pyr);
//
//function pyramid() {
//    for(i = 0; i < 7; i++) {
//        pyr.push('#');
////        console.log(i);
//        console.log(pyr);
//    }
//};
//
//pyramid('#');

////2.1 Looping a triangle
////My solution
//
//function pyramid(layer) {
//    for(var i = 0; i < 7; i++) {
//        layer += "#";
////        console.log(i);
//        console.log(layer);
//    }
//};
//
//pyramid('');
//
//
////His solution
//for (var line = "#"; line.length < 8; line += "#")
//  console.log(line);

//2.2 Fizzbuzz
//My solution

//function fizzbuzz(number) {
//    for(var i = 0; i < 100; i++) {
//        number += 1;
////        console.log(i);
//        if (number % 3 === 0 && number % 5 === 0) {console.log("FizzBuzz");}
//        else if (number % 5 === 0) {console.log("Fizz");} 
//        else if (number % 3 === 0) {console.log("Buzz");}
//        else {console.log(number);};
//    }
//};
//
//fizzbuzz(0);


//His solution
//for (var n = 1; n <= 100; n++) {
//  var output = "";
//  if (n % 3 == 0)
//    output += "Fizz";
//  if (n % 5 == 0)
//    output += "Buzz";
//  console.log(output || n);
//}


//2.3 Chessboard
//My solution

//function chessboard(i) {
//    for(i = 0; i < 4; i++) {
//        console.log(" # # # #"+"\n");
//        for(var p = 0; p < 1; p++){
//            console.log("# # # # ");
//            }
//        }    
//    }   
//
//chessboard(0);

////His solution
//var size = 8;
//
//var board = "";
//
//for (var y = 0; y < size; y++) {
//  for (var x = 0; x < size; x++) {
//    if ((x + y) % 2 == 0)
//      board += " ";
//    else
//      board += "#";
//  }
//  board += "\n";
//}
//
//console.log(board);

//// Example
//var ourArr = [ 9, 10, 11, 12];
//var ourTotal = 0;
//
//for (var i = 0; i < ourArr.length; i++) {
//  ourTotal += ourArr[i];
//}

//// Setup
//var myArr = [ 2, 3, 4, 5, 6];
//var total = 0;
//
//// Only change code below this line
//for (var i = 0; i < myArr.length; i++) {
//  total += myArr[i];
//}


//function multiplyAll(arr) {
//  var product = 1, p = 0, s = 0;
//  // Only change code below this line
//  for (p; p < arr.length; p++) {
//    console.log(p);
//      for (s; s < arr[p].length; s++) {
//      console.log(s);
//      console.log(product *= arr[p][s]);
//// console.log(product *= arr[p][s]);
//
//    }
//  // Only change code above this line
//  return product;
//}
//}
//
//// Modify values below to test your code
//multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

//Functions problem set
//function isEven (num) {
//    if(num % 2 === 0) {return "True";} 
//    else              {return "False";}
//}
//refactor
//function isEven (num) {
//    return num % 2 === 0;
//}



//function factorial(num) {
//    var result = 1;
//    for (var i = 2; i <= num; i++) {
//        result = result * i;
//    }
//    return result;
//}

//reverse for loop example
//**function factorial(num) {
//    var result = num;
//    if (num === 0) {
//        return 1;
//    }
//    for (var i = num - 1; i >= 1; i--) {
//        result = result * i;
//    }
//    return result;
//}

//function kebabToSnake(str) {
//    return str.replace(/-/g , "_");
//}
//
//kebabToSnake("Hi-there");


//**Looking up a profile 
//var contacts = [
//    {
//        "firstName": "Akira",
//        "lastName": "Laine",
//        "number": "0543236543",
//        "likes": ["Pizza", "Coding", "Brownie Points"]
//    },
//    {
//        "firstName": "Harry",
//        "lastName": "Potter",
//        "number": "0994372684",
//        "likes": ["Hogwarts", "Magic", "Hagrid"]
//    },
//    {
//        "firstName": "Sherlock",
//        "lastName": "Holmes",
//        "number": "0487345643",
//        "likes": ["Intriguing Cases", "Violin"]
//    },
//    {
//        "firstName": "Kristian",
//        "lastName": "Vos",
//        "number": "unknown",
//        "likes": ["Javascript", "Gaming", "Foxes"]
//    }
//];
//
//function lookUpProfile(firstName, prop){
//// Only change code below this line
//for (var x = 0; x < contacts.length; x++){
//    if (contacts[x].firstName === firstName) {
//        if (contacts[x].hasOwnProperty(prop)) {
//            return contacts[x][prop];
//        } else {
//            return "No such property";
//        }
//    }
//}
//return "No such contact";
//
//// Only change code above this line
//}
//
//// Change these values to test your function
//lookUpProfile("Akira", "likes");

//**MINESWEEPER - Board generation & testing creating arrays for certain properties
//var board = new Object ();
//board.cells = [{row: 0, col: 0, isMine: true, isMarked: true, hidden:   true, surroundingMines: 2},
//               {row: 0, col: 1, isMine: true, isMarked: true, hidden: true, surroundingMines: 2},
//               {row: 0, col: 2, isMine: true, isMarked: true, hidden: true, surroundingMines: 2},
//               {row: 1, col: 0, isMine: true, isMarked: true, hidden: true, surroundingMines: 2},
//               {row: 1, col: 1, isMine: true, isMarked: true, hidden: true, surroundingMines: 2},
//               {row: 1, col: 2, isMine: true, isMarked: true, hidden: true, surroundingMines: 2},
//               {row: 2, col: 0, isMine: true, isMarked: true, hidden: true, surroundingMines: 2},
//               {row: 2, col: 1, isMine: true, isMarked: true, hidden: true, surroundingMines: 2},
//               {row: 2, col: 2, isMine: true, isMarked: true, hidden: true, surroundingMines: 2}
//              ];
//
//function getRows(cells) {
//    var rowArr = [];
//    for(var i = 0; i < board.cells.length; i++) {
//        rowArr.push(board.cells[i].row);
//    }   
//    return rowArr;
//}
//
//var rowArray = getRows(board);
//
//console.log(rowArray);
//
//function getCols(cells) {
//    var colArr = [];
//    for(var i = 0; i < board.cells.length; i++) {
//        colArr.push(board.cells[i].col);
//    }   
//    return colArr;
//}
//
//var colArray = getCols(board);
//
//console.log(colArray);

////**MINESWEEPER - Automatic board generation test code - max #cells is 36.
//var cell = {row: 0, col: 0, isMine: true, isMarked: true, hidden: true, surroundingMines: 0};
//var board = new Object ();
//board.cells = [];
//
//// Max row/col length is 6.
//function findCellRange() {
//    var rand = Math.random();
//    var rowColLength = 0;
//    if (rand <= 0.2) {
//       rowColLength = 2;
//    } else if (rand > 0.2 && rand <= 0.4) {
//       rowColLength = 3;
//    } else if (rand > 0.4 && rand <= 0.6) {
//       rowColLength = 4;
//    } else if (rand > 0.6 && rand <= 0.8) {
//       rowColLength = 5;  
//    } else {
//       rowColLength = 6;  
//    }
//    return rowColLength;
//}
//
//var boardSize = findCellRange();
//
//function buildBoard() {
//    for (var i = 0; i < (boardSize * boardSize); i++) {
//    board.cells.push(cell);
//    }
//    return board;
//}
//
//buildBoard();
//
//console.log(board.cells);

//**Freecodecamp basic algorithms testing
//Converting string into an array, reversing and joining result into a string.

//function reverseString(str) {
//    var splitArray = str.split("");
//    return splitArray;
//}
//
//var splitArray = reverseString("hello");
//
//function reverseArray (splitArray) {
//    var revArr = splitArray.reverse();
//    return revArr;
//}
//
//var revArray = reverseArray (splitArray);
//
//var revString = function (revArray) {
//    var revString = revArray.join("");
//    return revString;
//}
//
//var revFinal = revString(revArray);
//
//console.log(splitArray);
//console.log(revArray);
//console.log(revFinal);
//
//// or
//
//function reverseString(str) {
//  var strArray = str.split("");
//  var strRev = strArray.reverse();
//  str = strRev.join("");
//  return str;
//}
//
//reverseString("hello");

// FACTORIALISE A NUMBER
//
//function factorialize(num) {
//  var counter = num;
//  var resultSum = 0;
//    
//  if (num === 0) {
//  return resultSum = 1;
//  } else {
//  for(i = 1; i < counter; i++) {
//  console.log(i);
//  console.log(counter);
//  resultSum = num *= i;
//  console.log(resultSum);
//  }
//      
//  return resultSum;
//  }
//}
//
//console.log(factorialize(5));
//
////CHECK FOR PALINDROMES

////Simple - check if the original cleaned string matches the string when reversed.
//
//function palindrome(str) {
//  return str.replace(/[\W_]/g, '').toLowerCase() ===
//         str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join('');
//}

    
//function palindrome(str) {
//  //Clean string of characters and spaces
//  var cleanString = str.replace(/[^a-zA-Z0-9]/g, '');
//    //or function isPalindrome(str) { str = str.replace(/\W/g, '').toLowerCase(); Get 'word-like characters'?
//    
//  // Split string into array
//  var strArray = cleanString.split("");
//  console.log(strArray);
//  var first = strArray[0];
//  var second = strArray[1];
//  var third = strArray[2];
//  var thirdToLast = strArray[strArray.length - 3];
//  var secondToLast = strArray[strArray.length - 2];
//  var last = strArray[strArray.length - 1];
//
//
//  if (strArray.length <= 3) {
//      console.log(first, last);
//      if (first === last) {
//        return true;
//      } else {
//        return false;
//      }
//  } else if (strArray.length <= 5) {
//       console.log(first, second, secondToLast, last);
//      if ((first === last) && (secondToLast === second)) {
//        return true;
//      } else {
//        return false;
//      }
//  } else if (strArray.length <= 7) {
//       console.log(first, second, third, thirdToLast, secondToLast, last);
//      if ((first === last) && (secondToLast === second) && (thirdToLast === third)) {
//        return true;
//      } else {
//        return false;
//      }
//    
//  }
//
//}


//palindrome("eye");

//JS CALCULATOR

//var x = 10;
//var y = 20;
//var a = eval("x * y") + "<br>";
//var b = eval("2 + 2") + "<br>";
//var c = eval("x + 17") + "<br>";

//FIND THE LONGEST WORD IN A STRING

//function findLongestWord(str) {
//  var strArray = str.split(' ');
//    console.log(strArray);
//  var lengthArr = [];
//  for (i = 0; i < strArray.length; i++) {
//  lengthArr.push(strArray[i].length);
//    console.log(lengthArr);
//  }
//    function getMaxOfArray(lengthArray) {
//      return Math.max.apply(null, lengthArray);
//    }  
//    
//    var maxVal = getMaxOfArray(lengthArr);
//    return maxVal;
//}
//
//findLongestWord("The quick brown fox jumped over the lazy dog");
//
////TITLE CASE A SENTENCE
//
//function titleCase(str) {
//    var strArray = str.split(' ');
//    console.log(strArray);
//    var uppercaseArray = [];
//        for (i = 0; i < strArray.length; i++) { 
//        uppercaseArray.push(strArray[i].charAt(0).toUpperCase() + strArray[i].slice(1).toLowerCase());
//        console.log(uppercaseArray);
//        }
//    var joinString = uppercaseArray.join(" ");
//  return joinString;
//}
//
//titleCase("I'm a little tea pot");


//RETURN LARGEST NUMBERS IN AN ARRAY

//function largestOfFour(arr) {
//  var newArr = [];
//  for (i=0; i < arr.length; i++) {
//    newArr.push(Math.max.apply(null,arr[i]));
//  };
//  // You can do this!
//  console.log(newArr);
//  return newArr;
//}
//
//largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


//Confirm the Ending Incomplete


//function confirmEnding(str, target) {
//  // "Never give up and good luck will find you."
//  // -- Falcor
//  // Check if a string (first argument, str) ends with the given target string (second argument, target).
//  var newStr = str.substr(-target.length)
//  console.log(newStr)
//  return newStr === target;
//}
//
//confirmEnding("Bastian", "ian");

//Repeat a string repeat a string 

//function repeatStringNumTimes(str, num) {
//  // repeat after me
//  var newArr = []
//  for (i=0; i<num; i++) {
//      newArr.push(str)
//      console.log(newArr)
//  }
//  const joinArr = newArr.join('')
//  console.log(joinArr)
//  return joinArr;
//}
//
//repeatStringNumTimes("abc", 3);

//Truncate a string 

//function truncateString(str, num) {
//  // Clear out that junk in your trunk
//  if (str.length <= num) {
//    var newStr = str.substr(0, num)
//    console.log('This is str.length = num newStr: ',newStr)
//  } else if (num >= 3) {
//    var newStr = str.substr(0, (num - 3)) + '...'
//    console.log('This is num >= 3 num: ',num)
//    console.log('This is num >= 3 str.length: ',str.length)
//    console.log('This is num >= 3 newStr: ',newStr)
//  } else {
//    var newStr = str.substr(0, num) + '...'
//    console.log(newStr)
//  }
//  return newStr;
//}
//
//truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2)

//Chunky Monkey

//function chunkArrayInGroups(arr, size) {
//  // Break it up.
//  newArr = []
//  for (i = 0 ; i < arr.length; i+= size) {
//      arrSlice = arr.slice(i, i + size)
//      console.log('This is arrSlice: ',arrSlice)
//      newArr.push(arrSlice)
//      console.log('This is newArr: ',newArr)
//  }
//  return newArr;
//}
//
//chunkArrayInGroups(["a", "b", "c", "d"], 2);

//Slasher Flick 

//function slasher(arr, howMany) {
//  // it doesn't always pay to be first
//    newArr = arr.slice(howMany)    
//    return newArr;
//}
//
//slasher([1, 2, 3], 2);

//Mutations 

//function mutation(arr) {
//  return arr;
//}
//
//mutation(["hello", "hey"]);


//Falsy Bouncer 
//
//Seek and Destroy 
//
//Where do I belong 
//
//Caesars Cipher 

// FLICK CODING TEST

// Write some code, that will flatten an array of arbitrarily nested arrays of integers into a flat array of integers. e.g. [[1,2,[3]],4] becomes [1,2,3,4].  

// First cut of flattenner using for loops - non-recursive ie doesn't work for infinite nested arrays.

function flattenerOld(arr) {
    newArr2 = []
    
    for (i = 0; i < arr.length; i++) {
        // loop over items in an array...
        // for each nested array found, loop over that nested array checking for more nested arrays and push any plain numbers found to newArr.
        
        // set test variables for each layer of the array.
        // use 'isArray' test so that conditions aren't triggered by key/value objects.
        const firstLayerObjFound = Array.isArray(arr[i])        

        if (firstLayerObjFound) {
            for (j = 0; j < arr[i].length; j++) {
    
              const secondLayerObjFound = Array.isArray(arr[i][j])
              if (secondLayerObjFound) {
                    for (k = 0; k < arr[i][j].length; k++) {
                    newArr2.push(arr[i][j][k])
                    }
                } else {
                newArr2.push(arr[i][j])
                }
            }
        } else {
            newArr2.push(arr[i])
        }
    }

    console.log("This is newArr2: ", newArr2)
}

flattenerOld([[1,2,[3]],4,[5,6],[7,[8,[9,10]]]])

// Refactored test with functional programming and recursive function structure.

function flattener(arr) {
    outputArray = []
    
    function checkAndPush(element) {
        
        const isItemArray = item => Array.isArray(item)
        const pushToOutputArray = item => outputArray.push(item)
            
        function pushNestedArray(element) {
            element.forEach((item) => {
                isItemArray(item) ? pushNestedArray(item) : pushToOutputArray(item)
            })
        }
        
        isItemArray(element) ? pushNestedArray(element) : pushToOutputArray(element)
    }
    
    arr.forEach((element) => checkAndPush(element))

    console.log("This is outputArray: ", outputArray)
}

// testing edge cases of multiple arrays nested 3 layers deep.
flattener([[1,2,[3]],4,[5,6],[7,[8,[9,10]]]])

// BACKUP OF FLICK TEST

//function flattener(arr) {
//    newArr = []
//    
//    function checkAndPush(element) {
//        console.log('This is element: ', element)
//        console.log('is element an array? ', Array.isArray(element))
//        
//        const isItemArray = item => Array.isArray(item)
//        const pushToNewArray = item => newArr.push(item)
//            
//        function pushNestedArray(element) {
//            console.log('This is pushNestedArray element: ', element)
//
//            element.forEach((item) => {
//                isItemArray(item) ? pushNestedArray(item) : pushToNewArray(item)
//            })
//        }
//        
//        isItemArray(element) ? pushNestedArray(element) : pushToNewArray(element)
//    }
//    
//    arr.forEach((element) => checkAndPush(element))
//
//    console.log("This is newArr: ", newArr)
//}
//
//flattener([[1,2,[3]],4,[5,6],[7,[8,[9,10]]]])

// Codewars - test if number is a perfect square. Code asks if number ends in 1, 4, 5, 6, or 9 - if so is perfect square. Code works but theory is wrong eg 26 is not a perfect square - don't believe everything you read on the internet!

var isSquare = function(n){
 
  function squareCheck(n) {
     // All perfect squares end in 1, 4, 5, 6, 9 or 00
     var stringDigits = (""+n).split("");
     var digits = stringDigits.map(str => Number(str))
     var lastDigit = digits[digits.length - 1]
     var scndLastDigit = digits[digits.length - 2]
     
     var testArr = []
     testArr.push(scndLastDigit, lastDigit)
     console.log('This is testArr: ',testArr)
     
     if (testArr[0] == 0 && testArr[1] == 0) {
//        console.log('This was a square with double-zero')
       return true
     } else if (testArr[0] == undefined || 0 && testArr[1] == 1 || 4 || 5 || 6 || 9) {
//        console.log('This was a square')
       return true
     } else {
       return false
     }
  }

  if (n < 0) {
    console.log("Negative numbers cannot be square numbers")
    return false
  } else if (n > 0) {
    squareCheck(n)  
  }
 }

// Codewars -- accum("abcd"); becomes "A-Bb-Ccc-Dddd". Mostly there except upper/lowercase. 

function accum(s) {
  var str = s.split("");
  strCounter = 0
  lenCounter = 1
  var outputLetters = []

  for (i = 0; i < str.length; i++) {
  
    for (j = 0; j < lenCounter; j++) {
      var input = str[strCounter]
      var inputLetter = input.toLowerCase()
      
      if (j > 0) {
        inputLetter = input.toLowerCase()
      } else {
        inputLetter = input.toUpperCase()
      }

      if (j === lenCounter - 1) {
        outputLetters.push(inputLetter)
        outputLetters.push("-")
      } else {
        outputLetters.push(inputLetter)
      }    
    }

    var outputStr = outputLetters.join("")
    strCounter ++
    lenCounter ++

  }
  console.log('This is outputStr: ',outputStr)  
  outputStr = outputStr.slice(0,-1)
  return outputStr
}

// Codewars - DNA strand. Each letter is paired, and each element of the string passed in is flipped to its pair before outputting

function DNAStrand(dna){
  return dna.split("").map((c,i) => c === "A" ? c = "T" 
                                    : c === "T" ? c = "A"
                                    : c === "G" ? c = "C"
                                    : c === "C" ? c = "G"
                                    : c
  ).join("")
}

Test.assertEquals(DNAStrand("AAAA"),"TTTT","String AAAA is");

// Codewars - Multiples of 3 or 5 below the number passed in

function solution(number){
  arr = []
  for (i = 1; i < number; i++) {
    arr.push(i)
  }
  
  return arr.filter((a,i) => a % 3 === 0 || a % 5 === 0).reduce((a,b) => a + b, 0)
}

// Codewars - Take number, split into array of numbers, square each number and rejoin

function squareDigits(num){
  var digits = (""+num).split("")
  var nums = digits.map(d => Number(d)).map(d => d * d).map(String).join("")
  return Number(nums)
}

// Codewars - Take array of numbers, find minimum, delete out using splice.

function removeSmallest(numbers) {
    min = Math.min.apply(Math, numbers)
    delIndex = numbers.indexOf(min)
    numbers.splice(delIndex, 1)
    return numbers
  }

Test.assertSimilar(removeSmallest([1, 2, 3, 4, 5]), [2, 3, 4, 5], "Wrong result for [1, 2, 3, 4, 5]");

// Codewars - Playing with digits - Code working except for edge case involving passing number with 0 in it to function

// Some numbers have funny properties. For example:
// 89 --> 8¹ + 9² = 89 * 1
// 695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2

// 46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

// Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p we want to find a positive integer k, if it exists, 
// such as the sum of the digits of n taken to the successive powers of p is equal to k * n. In other words:

// Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k

// If it is the case we will return k, if not return -1.

// Note: n, p will always be given as strictly positive integers.

function digPow(n, p){
  kArr = []
  powArr = []
  ansVal = 1
  
  var digits = (""+n).split("")
  var digArr = digits.map(d => Number(d))
  console.log('This is digArr: ',digArr)  
  
  for(i = 1; i < 129340; i++) {
    kArr.push(n * i)
  }
  
  for (i = 0; i < digArr.length; i++) {
    powArr.push(Math.pow(digArr[i],p + i))
  }
  powArrSum = powArr.reduce((a,b) => a + b)
  console.log('This is powArrSum: ',powArrSum)
  
  kArrMatch = kArr.some(r => r === powArrSum)
  //kArrMatch = kArr.some(r=> powArr.includes(r)) - Nice - matches value in one array to any found in target array.
  kArrFind = kArr.find(j => j == powArrSum)
  kArrIndex = kArr.indexOf(kArrFind)
  
  console.log('This is kArr: ',kArr)
  console.log('This is kArrMatch: ',kArrMatch)
  console.log('This is KArrFind: ',kArrFind)
  console.log('This is KArrIndex: ',kArrIndex)
  console.log('This is powArr: ',powArr)

  kArrMatch ? ansVal = kArrIndex + 1
            : ansVal = -1 
   
  return ansVal
}
