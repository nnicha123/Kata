
function greet() {
    if (!arguments.length) return 'Hello, my friend.'
    else if (arguments.length == 1) return (arguments[0].toUpperCase() === arguments[0]) ? `HELLO, ${arguments[0]}!` : `Hello, ${arguments[0]}.`
    else if (arguments.length === 2) return `Hello, ${arguments[0]} and ${arguments[1]}.`
    else if (arguments.length >= 2) {
        let count = 0; let caps = []; let nonCaps = []; let str = ''; let str2 = ''
        for (let i = 0; i < arguments.length; i++) if (arguments[i] === arguments[i].toUpperCase()) count += 1
        if (count > 0) {
            for (let i = 0; i < arguments.length; i++) (arguments[i] !== arguments[i].toUpperCase()) ? nonCaps.push(arguments[i]) : caps.push(arguments[i])
            return `Hello, ${nonCaps[0]} and ${nonCaps[1]}.` + ` AND HELLO ${caps[0]}!`
        }
        else {
            let str = ''
            for (let i = 0; i < arguments.length - 1; i++) str += (' ' + arguments[i] + ',')
            return `Hello ${str} and ${arguments[arguments.length - 1]}`
        };
    }

}
console.log(greet('Bob'))
console.log(greet())
console.log(greet('JERRY'))
console.log(greet("Jill", "Jane"))
console.log(greet("Amy", "Brian", "Charlotte"))
console.log(greet("Amy", "BRIAN", "Charlotte"))
