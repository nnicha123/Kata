printDiamond = (letter) => {
    let str = '';
    let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    let rounds = alphabet.indexOf(letter) + 1
    let k
    for (let z = 1; z <= rounds; z++) {
        for (let i = 1; i <= 5; i++) {
            round = z
            k = z-1
            j = 6 - i;
            str += ' '
            if (i === j && round == alphabet.indexOf(alphabet[0]) +1) { str += alphabet[0]; continue }
            else if (((2 * i === j) || (2 * j === i)) && round == alphabet.indexOf(alphabet[1]) +1) { str += 'B'; continue; }
            else if (((2 * i < j) || (2 * j < i)) && round == 3) { str += 'C'; continue; }
            else { str += ' ' }
        }
        str += '\n'
    }
    for (let z = rounds-1; z >= 1; z--) {
        round = z
        for (let i = 1; i <= 5; i++) {
            j = 6 - i;
            str += ' '
            if (i === j && round == 1) { str += 'A'; continue }
            else if (((2 * i === j) || (2 * j === i)) && round == 2) { str += 'B'; continue; }
            else if (((2 * i < j) || (2 * j < i)) && round == 3) { str += 'C'; continue; }
            else { str += ' ' }
        }
        str += '\n'
    }
    return str
}

console.log(printDiamond('C'))