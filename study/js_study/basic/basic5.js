//반응속도.js
var 스크린 = document.querySelector('#screen');
var 시작시간; 
var 끝시간;
var 기록 = [];
var 타임아웃;
// console.time('시간');
//var 시작시간 = performance.now();
스크린.addEventListener('click', function(){
    // console.timeEnd('시간');
    //var 끝시간 = performance.now();
    if(스크린.classList.contains('waiting')){ //현재 준비 상태인지 파악
        스크린.classList.remove('waiting');
        스크린.classList.add('ready');
        스크린.textContent = '초록색이 되면 클릭하세요.';
        타임아웃 = setTimeout(function(){
            시작시간 = new Date();
            스크린.click();
        }, Math.floor(Math.random()*1000 + 2000));
    }else if(스크린.classList.contains('ready')){ //준비 상태
        if(!시작시간){ //부정 클릭시 , 시작시간이 생기지 않으면 
            clearTimeout(타임아웃); //클릭함수를 삭제
            스크린.classList.remove('ready');
            스크린.classList.add('waiting'); //시작대기 상태로 바꿔줌
            스크린.textContent = '너무 성급하시군요!';
        }else{
            스크린.classList.remove('ready');
            스크린.classList.add('now');
            스크린.textContent = '클릭하세요!';
        }
    }else if(스크린.classList.contains('now')){ //시작상태
        끝시간 = new Date();
        console.log('반응속도', 끝시간 - 시작시간, 'ms'); //클릭 시간을 잴 수 있음
        기록.push(끝시간 - 시작시간);
        시작시간 = null; //다시 시작할 때 시간 초기화
        끝시간 = null;
        스크린.classList.remove('now');
        스크린.classList.add('waiting');
        스크린.textContent = '클릭해서 시작하세요.';
    }
});