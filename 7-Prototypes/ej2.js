// Take an array of numbers and make them strings
// Example input [2, 5, 100] ex output: ["2", "5", "100"]

function stringItUp(numbers){
    // your code here
    return numbers.map(n => {
        return n.toString();
    });
}




let test = require('../test.js');

test(stringItUp, [[2, 5, 100]], ["2", "5", "100"]);
test(stringItUp, [[]], []);
test(stringItUp, [[1]], ["1"]);