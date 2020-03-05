//테트리스게임.js

var tetris = document.querySelector('#tetris');
var blockDict = {//블럭의 색/움직임/모양
    1: ['red', true, [
        [1,1],
        [1,1]
    ]],
    2: ['blue', true, [
        [0,1,0],
        [1,1,1]
    ]],
    3: ['orange', true, [
        [1,1,0],
        [0,1,1]
    ]],
    4: ['skyblue', true, [
        [0,1,1],
        [1,1,0],
    ]],
    5: ['yellowgreen', true, [
        [1,1,1],
        [1,0,0]
    ]],
    6: ['pink', true, [
        [1,1,1],
        [0,0,1]
    ]],
    7: ['yellow', true, [
        [1,1,1,1]
    ]],
    10: ['red', false, []],
    20: ['blue', false, []],
    30: ['orange', false, []],
    40: ['skyblue', false, []],
    50: ['yellowgreen', false, []],
    60: ['pink', false, []],
    70: ['yellow', false, []],
}
var tetrisData = [];

function 칸만들기(){
    var fragment = document.createDocumentFragment(); //임시 저장소를 만든다.
    for(var i = 0; i < 20; i++){
        var tr = document.createElement('tr');
        var arr = [];
        tetrisData.push(arr);
        fragment.appendChild(tr);
        for(var j=0; j < 10; j++){
            var td = document.createElement('td');
            tr.appendChild(td);
            arr.push(0);
        }
    }
    console.log(tetris, fragment);
    tetris.appendChild(fragment);
}

window.addEventListener('keydown', function(e){
    switch (e.code){
      
        case 'ArrowRight' : //오른쪽 이동
            break;
        case 'ArrowLeft' : //왼쪽 이동
            break;
        case 'ArrowDown' : //아래쪽 이동
            break;
        default:
            break;
    }
})

window.addEventListener('keyup', function(e){
    switch (e.code){
        case 'Space' : //한방에 내리기
            break;
        case 'ArrowUp' : //방향 전환
            break;
        default:
            break;
    }
})



칸만들기();