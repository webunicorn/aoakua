const path = require('path'); //node에서 경로 조작하는 것

module.exports = {
    name: 'wordRealy - setting', //이 파일이 무엇을 나타내는지
    mode: 'development', //실서비스 : production
    devtool: 'eval',
    resolve: { //확장자들 알아서 찾아주는 기능
        extensions: ['.js','.jsx']
    },

    entry:{
        app: ['./client'], //두 jsx를 합쳐서 출력 부분의 app.js로 만들자. client.jsx가 wordRelay를 부르고 있어서 wordRelay는 안써도 됨. 확장자도 안써도됨(resolve로)
    },//입력
    output:{
        path: path.join(__dirname, 'dist'), //path.join으로 __dirname(현재폴더)안의 dist를 자동으로 연결
        filename: 'app.js'
    },//출력
};