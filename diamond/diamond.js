printDiamond = (letter) => {
    let str = ''
    let count = 0;
    let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

    for (let i = 0; i <= alphabet.indexOf(letter); i++) {
        for (let j = 0; j < (alphabet.indexOf(letter)*2 + 1); j++) {
            count += 1
            if (count == 3) {
                str += (' A')
                continue
            } if (count == 7 || count == 9) {
                str += (' B')
                continue
            } if (count == 11 || count == 15) {
                str += (' C')
                continue
            }
            str += (' ')
        }
        str += ('\n')
    }
    return str
}

console.log(printDiamond('C'))