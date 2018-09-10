const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect('mongodb://root:anseotjd@localhost:27017/admin',{
        dbName: 'nodejs',
    }, (error) => {
        if(error) {
            console.log('몽고디비 연결 에러', error);
        } else {
            console.log('몽고디비 연결 성공');
        }
    });
    mongoose.connection.on('error', (error)=>{
        console.error('몽고디비 연결 에러', error);
    });
    mongoose.connection.on('disconnected', (error) => {
        console.error('몽고디비 연결이 끊겼습니다. 연결을 재시도 합니다.');
    })
};