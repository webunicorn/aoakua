const React = require('react');
const ReactDom = require('react-dom');

const WordRelay = require('./WordRelay'); //wordRelay.jsx에 있는 WordRelay 컴포너트 불러오기, 필요한 것만 가져오기

ReactDom.render(<WordRelay />, document.querySelector('#root'));