// 사용할 변수를 불러온다.
const { odd, even } = require('./var');

function checkOddOrEven(num) {
    if (num % 2){ // 홀수면
        return odd;
    }
    return even;
}

module.exports = checkOddOrEven;