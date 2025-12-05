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
            if (stringElement.length % 2 === 0) {
                if (stringElement.slice(0, stringElement.length / 2) === stringElement.slice(stringElement.length / 2)) {
                    password += i;
                }
            }
        }
    });
    return password;
}
console.log(decypher());
