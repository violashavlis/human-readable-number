module.exports = function toReadable(number) {
    var words = [
        ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"],
        ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]
    ];
    
    if (number === 0) {
        return "zero";
    }

    var result = "";

    if (number >= 100) {
    result = words[0][(number - (number % 100) ) / 100] + " hundred";
    };

    if (number % 100 < 20) {
        result += " " + words[0][number % 100];
    } else if (number % 10 === 0) {
        result += " " + words[1][(number % 100 - (number % 10) ) / 10];
    } else {
        result += " " + words[1][(number % 100 - (number % 10) ) / 10];
        result += " " + words[0][number % 10];
    };
    
    return result.trim();
}