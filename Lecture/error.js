process.on('uncaughtException', (err)=> { // 에러가 계속 남 근본적인 해결책은 아니다.
    console.error('예기치 못한 에러', err);
    // 서버를 복구하는 코드 하지만 실행이 될지는 미지수g
});

setInterval(()=>{
    throw new Error('서버를 고장내주마!');
}, 1000);
setTimeout(()=>{
    console.log('실행됩니다.');
}, 2000);


// const fs = require('fs');
// setInterval(()=> {
//     fs.unlink('./asdfasf.js', (err) => { // 노드 내장메소드는 err가 나도 프로세스를 멈추지 않는다.
//         if(err){
//             console.log('시작')
//             console.log(err)
//             console.log('끝')
//         }
//     })
// }, 1000);

