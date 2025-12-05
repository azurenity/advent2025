import * as fs from 'fs';

function decypher() {
    const content:string = fs.readFileSync('input.txt','utf8');
    let password = 0
    const ranges: string[] = content.split(',')


    // take the range, for each number in the range, see if theres a number repeated twice --> length has to be even
    ranges.forEach((range) => {
        const numList: string[] = range.split('-')
        const [ lower, higher ] = numList
        for (let i = Number(lower); i <= Number(higher); i++) {
            const stringElement: string = i.toString()
            if (stringElement.length % 2 === 0) {
                if (stringElement.slice(0,stringElement.length / 2) === stringElement.slice(stringElement.length / 2)) {
                    password += i
                }
            } 
        }
    })

    return password
}

console.log(decypher())