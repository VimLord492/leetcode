/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
    if (s.length <= 1) {
        return 0;
    }

    let longestString = 0;
    let potentiallyValidStrings = [];

    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            
            potentiallyValidStrings = potentiallyValidStrings.map(
                (possibility) => {
                    possibility.stringLength += 1;
                    return possibility;
                }
            );

            
            potentiallyValidStrings.push({
                start: i,
                stringLength: 1,
            });
        } else {
            
            potentiallyValidStrings = potentiallyValidStrings.map(
                (possibility) => {
                    possibility.stringLength -= 1;
                    return possibility;
                }
            );

            
            potentiallyValidStrings
                .filter((possibility) => possibility.stringLength == 0)
                .forEach((possibility) => {
                    
                    longestString = Math.max(
                        longestString,
                        i - possibility.start + 1
                    );
                });

            
            potentiallyValidStrings = potentiallyValidStrings.filter(
                (possibility) => possibility.stringLength >= 0
            );
        }
    }

    return longestString;
};