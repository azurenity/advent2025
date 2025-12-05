"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
function decypher() {
    var content = fs.readFileSync('input.txt', 'utf8');
    var password = 0;
    var ranges = content.split(',');
    // take the range, for each number in the range, see if theres a number repeated twice --> length has to be even
    ranges.forEach(function (range) {
        var numList = range.split('-');
        var lower = numList[0], higher = numList[1];
        for (var i = Number(lower); i <= Number(higher); i++) {
            var stringElement = i.toString();
            // you want to check if theres a substring that can be repeated to copy the string
            if (isInvalid(stringElement)) {
                password += i;
            }
        }
    });
    return password;
}
console.log(decypher());
function isInvalid(stringElement) {
    var j = 1;
    var substring = stringElement.slice(0, j);
    while (substring.length < (Math.floor(stringElement.length / 2) + 1)) {
        if (stringElement.length % substring.length === 0) {
            var stringFormed = substring.repeat(stringElement.length / substring.length);
            if (stringFormed === stringElement) {
                return true;
                break;
            }
        }
        j++;
        substring = stringElement.slice(0, j);
    }
    return false;
}
