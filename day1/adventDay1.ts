import * as fs from 'fs';

function decypher() {
    const content:string = fs.readFileSync('input.txt','utf8');
    
    let times = 0
    let dial = 50
    let prevDial = 50
    const lines: string[] = content.split(/\r?\n/)
    
    lines.map((instructions) => {
        let direction = instructions.slice(0,1)
        let magnitude = parseInt(instructions.slice(1), 10) % 100
        let numberPassed = Math.floor(parseInt(instructions.slice(1), 10) / 100)

        times += numberPassed // default times it will cross 0 anyways
        if (direction === 'L') {
            dial -= magnitude
        } else if (direction === "R") {
            dial += magnitude
        }
        
        if (prevDial === 0) {
            if (dial < 0) {
                dial += 100
            } 
        } else if (prevDial !== 0) {
            if (dial > 99) {
                dial -= 100
                times += 1
            } else if (dial < 0) {
                dial += 100
                times += 1
            } else if (dial === 0) {
                times += 1 // this double counts if my dial go 70 to 100
            }
        }

        prevDial = dial
    })

    return times
}

console.log(decypher())