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

// Write some code, that will flatten an array of arbitrarily nested arrays of integers into a flat array of integers. e.g. [[1,2,[3]],4] becomes [1,2,3,4]. 

function flattener(arr) {
    console.log("This is arr: ",arr)
    console.log("This is arr.length: ",arr.length)

    newArr = []
    // loop over array
    
    for (i = 0; i < arr.length; i++) {
        subArr = []
        // for each object (ie array) found, loop over that sub-array and push to newArr
        if (typeof arr[i] === "object") {
            for (j = 0; j < arr[i].length; j++) {
            
              if (typeof arr[i][j] === "object") {
                    for (k = 0; k < arr[i][j].length; k++) {
                    newArr.push(arr[i][j][k])
                    }
                } else {
                newArr.push(arr[i][j])
                }
            }
        } else {
            newArr.push(arr[i])
        }
    }
    console.log("This is newArr: ", newArr)
    return newArr
}

//flattener([[[1],2,3],4])

flattener([[1,2,[3]],4])

// DO RECURSION




