/**
 * @param {number} n
 * @return {string}
 */

export default (n) => {
  let pre = "1";
  for (let i = 2; i <= n; i++) {
    let temp = "";
    let count = 1;
    for (let j = 1; j <= pre.length; j++) {
      if (pre.charAt(j) && pre.charAt(j) === pre.charAt(j - 1)) {
        count++;
      } else {
        temp += `${count}${pre.charAt(j - 1)}`;
        count = 1;
      }
    }
    pre = temp;
  }
  return pre;
};