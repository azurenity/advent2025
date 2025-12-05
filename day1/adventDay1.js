"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
function decypher() {
    var content = fs.readFileSync('input.txt', 'utf8');
    var times = 0;
    var dial = 50;
    var prevDial = 50;
    var lines = content.split(/\r?\n/);
    lines.map(function (instructions) {
        var direction = instructions.slice(0, 1);
        var magnitude = parseInt(instructions.slice(1), 10) % 100;
        var numberPassed = Math.floor(parseInt(instructions.slice(1), 10) / 100);
        times += numberPassed; // default times it will cross 0 anyways
        if (direction === 'L') {
            dial -= magnitude;
        }
        else if (direction === "R") {
            dial += magnitude;
        }
        if (prevDial === 0) {
            if (dial < 0) {
                dial += 100;
            }
        }
        else if (prevDial !== 0) {
            if (dial > 99) {
                dial -= 100;
                times += 1;
            }
            else if (dial < 0) {
                dial += 100;
                times += 1;
            }
            else if (dial === 0) {
                times += 1; // this double counts if my dial go 70 to 100
            }
        }
        prevDial = dial;
    });
    return times;
}
console.log(decypher());
