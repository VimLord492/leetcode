/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    let i = 0
    let output = '' 
    const intMax = 2**31 - 1
    const intMin = -intMax - 1
    while (i<str.length) {
       const char = str[i]
       if (!char == " ") {
           if (char.toLowerCase() === char.toUpperCase()) {
               output = output + char
           } else if (output) {
               break
           }
           if (!output) return 0
       }
        i++
    }
    output = parseInt(output)
    if (output !== null && !isNaN(output)) {
        if (output > intMax) return  intMax
        if (output < intMin) return intMin 
        return output
    }
    return 0
}