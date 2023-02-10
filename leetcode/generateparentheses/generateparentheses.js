/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    let optionsArray = [];

    function innerGenerateParentheses(
        currentString,
        openBrackets,
        closedBrackets,
        maximumPairs
    ) {
        
        if (currentString.length == maximumPairs * 2) {
            
            optionsArray.push(currentString);
            return;
        }

        
        if (openBrackets < maximumPairs) {
            
            innerGenerateParentheses(
                currentString + '(',
                openBrackets + 1,
                closedBrackets,
                maximumPairs
            );
        }

        
        if (closedBrackets < openBrackets) {
            
            innerGenerateParentheses(
                currentString + ')',
                openBrackets,
                closedBrackets + 1,
                maximumPairs
            );
        }
    }

    
    innerGenerateParentheses('', 0, 0, n);
    return optionsArray;
};