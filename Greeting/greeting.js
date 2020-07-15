
function greet(name) {
    if(arguments[0])console.log(arguments[0].length)
    if (!name) return 'Hello, my friend.'
    else if (name.length == 1) {
        if (name.toUpperCase() === name) return `HELLO, ${name}!`
        return `Hello, ${name}.`
    }
    else if (name.length === 2) return `Hello, ${name[0]} and ${name[1]}.`

    else if (name.length >= 2) {
        let str = ''
        for (let i = 0; i < name.length - 1; i++) {
            str += (' ' + name[i] + ',')
        }
        return `Hello ${str} and ${name[name.length - 1]}`
    };
}
console.log(greet('Bob'))
console.log(greet())
console.log(greet('JERRY'))
console.log(greet(["Jill", "Jane"]))
console.log(greet(["Amy", "Brian", "Charlotte"]))