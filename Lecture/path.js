const path = require("path");
path.sep; // 경로 구분자
path.delimiter; // 환경 변수 구분자
path.dirname(__filename); // 경로
path.extname(__filename); // 확장자
path.basename(__filename); // 파일 이름

console.log(path.parse(__filename));
console.log(path.format({
    root: 'C:\\',
    dir: 'C:\\Users\\anseo\\nodeJS\\Lecture',
    base: 'path.js',
    ext: '.js',
    name: 'path'
}));
console.log(path.normalize("C:\\Users\\anseo\\nodeJS\\Lecture\\path.js"));

console.log(__dirname);
console.log(path.join(__dirname,'..','..'));