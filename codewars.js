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

accum("abcd")

// Codewars - DNA strand. Each letter is paired, and each element of the string passed in is flipped to its pair before outputting

function DNAStrand(dna){
  return dna.split("").map((c,i) => c === "A" ? c = "T" 
                                    : c === "T" ? c = "A"
                                    : c === "G" ? c = "C"
                                    : c === "C" ? c = "G"
                                    : c
  ).join("")
}

DNAStrand("AAAA")

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

// Codewars - Title case - incomplete as doesn't yet deal with minorWords using .replace function

function titleCase(title, minorWords) {
  console.log('typeof title: ',typeof title)
  console.log('title: ',title)
  
  if (title === '') {
    return title
  } else {
  var titleLow = title.toLowerCase().split(" ")
  console.log('titleLow: ',titleLow)
  return titleLow.map(l => l.charAt(0).toUpperCase() + l.slice(1)).join(' ')
  }
}

// Codewars - format an array of names like 'Bart, Lisa & Maggie'

function list(names){
  outputArr = []
  names.forEach((name,i) => {
      names.length === 1 ? outputArr.push(name.name)
      : i === names.length - 1 ? outputArr.push('& ' + name.name)
      : i === names.length - 2 ? outputArr.push(name.name + ' ')
                               : outputArr.push(name.name + ', ')
  })
 return outputArr.join('')
}

Test.assertEquals(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}]), 'Bart, Lisa, Maggie, Homer & Marge',
"Must work with many names")

// Codewars - Sort only the odd numbers of an array. Need to sort some edge cases... where same number in array, indexOf returns 1st index and not subsequent.

function sortArray(array) {
  var oddNumIdx = []
  array.forEach(a => a % 2 !== 0 ? oddNumIdx.push(array.indexOf(a)) : a)
  
  var oddNumArr = array.filter(a => a % 2 !== 0).sort((a,b) => a - b)
  
  console.log('oddNumIdx: ',oddNumIdx)
  console.log('oddNumArr: ',oddNumArr)

  var newArr = array
  oddNumArr.forEach((a,i) => newArr.splice(oddNumIdx[i],1,oddNumArr[i]))
  
  return newArr

}

// Codewars - Where my anagrams at? Not working yet - how to match objects in any array?

function anagrams(word, words) {
  // flatten all words into single array for testing.
  wordArr = []
  function wordArray(word,words) {
    wordArr.push(word)
    words.forEach(w => wordArr.push(w))
  }
  wordArray(word, words)
  console.log('wordArr: ',wordArr)

  // put string lengths into array for testing multiple string lengths found.
  const strLengths = []
  wordArr.forEach(w => strLengths.push(w.length))
  console.log('strLengths: ',strLengths)
    
  // split each word into own sub-array 
  const wordArrArr = wordArr.map((w,i) => w.split(''))
  console.log('wordArrArr: ',wordArrArr)
  
  // do letter count of each word sub-array
  wordArrCount = []
  for (i = 0; i < wordArrArr.length; i++) {
    var occurrences = wordArrArr[i].reduce(function(obj, item) {
    obj[item] = (obj[item] || 0) + 1    
    return obj
  }, {})
    wordArrCount.push(occurrences)
  }

  console.log('WordArrCount: ',wordArrCount)
  
  // compare letter counts and push matches to anagram array.
  var matches = []
     
  wordArr.forEach(w => {
      console.log(w)
      var match = 
      
  })
  
//  function findByMatchingProperties(set, properties) {
//    console.log(properties)
//    return set.filter(function (entry) {
//        return Object.keys(properties).every(function (key) {
//            matches.push(entry[key] === properties[key])
//        });
//    });
//  }
    
//  console.log('wordArrCount[i]: ',wordArrCount[0])


  // function findMatchLoop(wordArrCount) {
//      for (i = 0; i > wordArrCount.length; i++) {
//          console.log('wordArrCount[i]: ',wordArrCount.length)
//        // findByMatchingProperties(wordArrCount, wordArrCount[i])
//      }
  // }
    
  // findMatchLoop(wordArrCount)
  console.log('matches: ',matches)
    
}

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])
    
// Codewars - format array into phone number... best solution then my answer below
    
function createPhoneNumber(numbers){
  var format = "(xxx) xxx-xxxx";
  
  for(var i = 0; i < numbers.length; i++)
  {
    format = format.replace('x', numbers[i]);
  }
  
  return format;
}
    
    
// and mine... 
    
function createPhoneNumber(numbers){
  phArr = []
  for (i = 0; i < numbers.length + 3; i++) {
  i === 0 ? phArr.push('\(')
  : i <=  3 ? phArr.push(numbers[i - 1])
  : i === 4 ? phArr.push('\) ')
  : i <=  7 ? phArr.push(numbers[i - 2])
  : i === 8 ? phArr.push('-')
  : i <= 13 ? phArr.push(numbers[i - 3])
            : phArr.push('-')
  }
  return phArr.join('')
  
}