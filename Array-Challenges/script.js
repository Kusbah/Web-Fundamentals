function alwaysHungry(arr) {
    var foundFood = false;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === "food") {
            console.log("yummy");
            foundFood = true;
        }
    }
    if (!foundFood) {
        console.log("I'm hungry");
    }
}

alwaysHungry([3.14, "food", "pie", true, "food"]);
alwaysHungry([4, 1, 5, 7, 2]);
//2 High Pass Filter
function highPass(arr, cutoff) {
    var filteredArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > cutoff)
            filteredArr.push(arr[i]);
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]
//Better than average
function betterThanAverage(arr) {
    var sum = 0;
    var n = arr.length;
    for (var i = 0; i < n; i++) {
        sum += arr[i];
    }
    sum /= n;
    var count = 0
    for (var i = 0; i < n; i++) {
        if (arr[i] > sum)
            count += 1;
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4
//Array Reverse
function reverse(arr) {
    var tempArr = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        tempArr.push(arr[i])
    }
    arr = tempArr
    return arr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]
//Fibonacci Array
function fibonacciArray(n) {
    var fibArr = [0, 1];
    for (var i = 2; i < n; i++) {
        fibArr[i] = fibArr[i - 1] + fibArr[i - 2]
    }
    return fibArr;
}
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]