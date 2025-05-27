// Challenge 1:Sum of Positives
function sumOfPositives(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum = sum + arr[i];
    }
  }

  return sum;
}
// console.log(sumOfPositives([6,-3,1,-2,1]))

//Challenge 2: Find Maximum Value
function findMax(numbers) {
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i]) return max;
  }
}
// console.log(sumOfPositives([64,55,21,86,40]))

// Challenge3:Election winner
function findWinner(obj) {
  let highestVotes = 0;
  let winner;
  for (let i = 0; i < obj.length; i++) {
    if (obj[i].votes > highestVotes) {
      highestVotes = obj[i].votes;
      winner = obj[i].name;
    }
  }
  console.log(`{name:"${winner}", votes:${highestVotes}}`);
}
const candidates = [
  { name: "Alice", votes: 50 },
  { name: "Bob", votes: 75 },
  { name: "Charlie", votes: 65 },
];

// findWinner(candidates);

// Challenge 4: Longest word
function findLongestWord(stg) {
  let longestString = 0;
  let word;
  for (let i = 0; i < stg.length; i++) {
    if (stg[i].length > longestString) {
      longestString = stg[i].length;
      word = stg[i];
    }
  }
  //  console.log(`${word}`)
}
findLongestWord(["apple", "banana", "pear", "grapefruit"]);

// // Challenge 5:Count properties
function countProperties(obj1) {
  keys = Object.keys(obj1);
  return keys.length;
}
// console.log(countProperties({ name: "Alice", age: 25, city: "Paris" }));
// Challenge 6: Filter by Length
function filterByLength(arr6, num) {
  for (let i = 0; i < arr6.length; i++) {
    if (arr6[i].length >= num) {
      console.log(arr6[i]);
    }
  }
}
filterByLength(["cat", "giraffe", "hippo", "dog", "elephant"], 5);

//Challenge 6: Filter by Length
function filterByLength(arr, minlength) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length >= minlength) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}
console.log(filterByLength(["cat", "giraffe", "hippo", "dog", "elephant"], 5)
)

//Challenge 7: Sum of Even Numbers
function sumEvenNumbers(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sum += arr[i];
    }
  }
  return sum;
}

console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6]))

//Challenge 8: Difference Between Sum of Even and Odd Numbers
function differenceEvenOdd(arr) {
  let sumEven = 0;
  let sumOdd = 0;
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEven += arr[i];
    } else {
      sumOdd += arr[i];
    }
  }
  result = sumEven - sumOdd;
  return result;
}

console.log(differenceEvenOdd([1, 2, 3, 4, 5, 6]))

//Challenge 9: Count Truthy
function countTruthy(obj) {
  let count = 0;
  for (let key in obj) {
    if (obj[key]) {
      count++;
    }
  }
  return count;
}

console.log(countTruthy({ a: 0, b: "hello", c: false, d: 42, e: null }));

//Challenge 10: Average of Numbers
function average(arr) {
  let sum = 0;
  let average;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    average = sum / arr.length;
  }
  if (arr.length === 0) {
    return 0;
  }
  return average;
}
console.log(average([2, 4, 6, 8]))
console.log(average([]));

//Challenge 11: Linear Search
function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch([5, 3, 7, 1, 4], 7));
console.log(linearSearch([5, 3, 7, 1, 4], 10));

//Challenge 12: Reverse Linear Search
function reverseLinearSearch(arr, val) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}

console.log(reverseLinearSearch([5, 3, 7, 1, 4, 7], 7))
console.log(reverseLinearSearch([5, 3, 7, 1, 4], 10))

//Challenge 13: Linear Search All Indices
function linearSearchAll(arr, val) {
  let newarr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      newarr.push(i);
    }
  }
  return newarr;
}

console.log(linearSearchAll([5, 3, 7, 1, 4, 7], 7))
console.log(linearSearchAll([5, 3, 7, 1, 4], 10))

//Challenge 14: Count Occurrences
function countOccurrences(arr) {
  let count = {};
  for (let str of arr) {
    if (count[str]) {
      count[str] += 1;
    } else {
      count[str] = 1;
    }
  }
  return count;
}

console.log(countOccurrences(["apple", "banana", "apple", "orange", "banana", "apple"]))

//Challenge 15: Remove Occurrences
function removeDuplicates(arr) {
  let newarr = [];
  let mySet;
  for (let i = 0; i < arr.length; i++) {
    newarr.push(arr[i]);
  }
  mySet = [...new Set(newarr)];
  return mySet;
}

console.log(removeDuplicates([1, 2, 3, 2, 4, 1, 5]))

//Challenge 16: Most Frequent
function mostFrequent(arr) {
  let count = {};
  let maxCount = 0;
  let maxStr;
  for (let str of arr) {
    if (count[str]) {
      count[str] += 1;
    } else {
      count[str] = 1;
    }
    if (count[str] > maxCount) {
      maxCount = count[str];
      maxStr = str;
    }
  }

  return maxStr;
}

console.log(mostFrequent([1, 2, 2, 3, 3, 3, 4]));
console.log(mostFrequent(["apple", "banana", "apple", "orange", "banana", "apple"]))