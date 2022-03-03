//Fix the code to Sum of the digits present in the number :

let s = 123;

function add(n) {
    let summ = 10;
    for (var i = 0; i < n.length; i++) {
        summ += n[i]
    }
    return summ;
}
console.log(add(n));


//Fix the code to Sum of all numbers using IIFE function :

(function() {
    let arr = [9, 8, 5, 6, 4, 3, 2, 1]
    let sum11 = 0;
    for (var i = 0; i < arr.length; i++) {
        sum11 = sum11 + arr[i];
    }
    console.log(sum11);
    return sum11
})()

//Fix the code to get the largest of three. :

const lthree = (f, s, t) => {
    if (f > s && f > t) {
        console.log(f)
    } else if (s > f && s > t) {
        console.log(s)
    } else {
        console.log(t)
    }
}
lthree(1, 2, 3);


//Fix the code to sum the number in that array:

const numm = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
const summ1 = numm.reduce((a, b) => {
    return a + b

})
console.log(summ1);


//print all odd numbers in an array using IIFE function :

var aodd = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
(function() {
    for (var i = 0; i < aodd.length; i++) {
        if (aodd[i] % 2 !== 0) {
            console.log(aodd[i]);
        }
    }
})();


//Fix the code to reverse :

(function(str) {
    var str1 = str.split("").reverse().join("");
    console.log(str1);
})("abcd")

//Fix the code to return the Prime numbers :

const newArray = [1, 3, 2, 5, 10];
const myPrime = newArray.filter(num => {
    for (let i = 2; i <= num / 2; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num !== 0;
});
console.log(myPrime);

//Fix the code to remove duplicates :

let newArr15 = [];
var res11 = function(arr) {
    for (var i = 0; i < arr.length; i++) {

        if (newArr15.indexOf(arr[i]) == -1) {
            newArr15.push(arr[i]);
        }
    }
    console.log(newArr15)
}
res11(["guvi", "geek", "guvi", "duplicate", "geeK"])


//Sum of odd numbers in an array :

var sum_odd = [12, 34, 5, 6, 2, 56, 6, 2, 1];
var oddNumbers = sOdd.filter(function(item) {
    return (item % 2 !== 0);
})
var total00 = oddNumbers.reduce(function(tot, curr) {
    return tot + curr
})

console.log(total00);


//Fix the code to gen Title caps :

var titleCaps = ["guvi", "geek", "zen", "fullstack"];
(function() {
    for (var i = 0; i < titleCaps.length; i++) {
        console.log(titleCaps[i][0].toUpperCase() + titleCaps[i].substr(1))
    }
})();


//Swap the odd and even digits :

swap = (data) => {
    var a = data;
    var l = '';
    for (i = 0; i < a.length; i++) {
        var s = a[i + 1]
        var b = a[i]
        l += s
        l += b
        i = i + 1
    }
    if ((a.length % 2) != 0) {
        l += a[a.length - 1]
    }
    console.log(l);
}
swap("1234");

// Fix the code to rotate an array by k times and return rotated array using IIFE function :

var rotateByK = [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13];
var k = 3;
k = rotateByK.length % k;
(function() {
    out = rotateByK.slice(k + 1, rotateByK.length);
    var count = out.length;
    for (var i = 0; i < k + 1; i++) {
        out[count] = rotateByK[i];
        count += 1;
    }
    console.log(out);
})();