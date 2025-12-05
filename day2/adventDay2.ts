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
            // you want to check if theres a substring that can be repeated to copy the string
            if (isInvalid(stringElement)) {
                password += i
            }
        }
    })

    return password
}

console.log(decypher())

function isInvalid(stringElement: string) {

    let j = 1;
    let substring: string = stringElement.slice(0, j);
    while (substring.length < (Math.floor(stringElement.length / 2) + 1)) {
        if (stringElement.length % substring.length === 0) {
            let stringFormed: string = substring.repeat(stringElement.length / substring.length);
            if (stringFormed === stringElement) {
                return true
                break;
            }
        }
        j++;
        substring = stringElement.slice(0, j);
    }
    return false;
}