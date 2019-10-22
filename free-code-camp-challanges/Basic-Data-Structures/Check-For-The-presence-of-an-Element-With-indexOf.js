// function quickCheck(arr, elem) {
  // change code below this line
  // if (arr.indexOf(elem)>=0){
      // return true;
    // }
    // else{
        // return false;
    // }
  // change code above this line
// }
// 
// change code here to test different cases:
// console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
// console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms"));
// console.log(quickCheck(["squash", "onions", "shallots"], "onions"));
// console.log(quickCheck([3, 5, 9, 125, 45, 2], 125));
// console.log(quickCheck([true, false, false], undefined));

function solution(num){
  var numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
   var roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
   var romanized = ""
   for (var i = 0; i < roman.length; i++) {
       while (roman[i] <= num) {
           romanized += numbers[i]
           num = roman[i]
       }
   }
   return romanized
}

console.log(solution('X'))