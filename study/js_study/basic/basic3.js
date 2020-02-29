//가위바위보
var 이미지좌표 = '0';
var 가위바위보 = { //딕셔너리 자료구조
    바위 : '0',
    가위 : '-124px',
    보 : '-284px'
}
console.log(Object.entries(가위바위보));

function 컴퓨터의선택(이미지좌표){ //함수로 만들어 컴퓨터가 낸 값을 추출
    return Object.entries(가위바위보).find(function(v){//object.entries로 객체를 배열로 바꿈. find를 이용해 배열의 좌표 값을 찾아 클릭한 이미지좌표값과 비교
        return v[1] === 이미지좌표;
    })[0];
}

setInterval(function(){
    if(이미지좌표 === 가위바위보.바위){
        이미지좌표 = 가위바위보.가위;
    }else if(이미지좌표 == 가위바위보.가위){
        이미지좌표 = 가위바위보.보;
    }else{
        이미지좌표 = 가위바위보.바위;
    }
    document.querySelector('#computer').style.background = 'url()' + 이미지좌표 + '0'; //가위바위보 이미지를 넣어서 이미지 스프라이트 처리 하자. x축으로 이동

},500);

var 점수표 = {
    가위 : 1,
    바위 : 0,
    보 : -1
}

document.querySelectorAll('.btn').forEach(function(btn){//queryselectorall을 유사배열로 인식해 foreach로 사용 가능
    btn.addEventListener('click',function(){ //해당 버튼을 클릭하는 이벤트리스터
       var 나의선택 = this.textContent;
       var 나의점수 = 점수표[나의선택];
       var 컴퓨터점수 = 점수표[컴퓨터의선택(이미지좌표)];
       var 점수차 = 나의점수 - 컴퓨터점수;
        
       if(점수차 === 0){
            console.log('비겼습니다.');
       }else if([-1,2].includes(점수차)){ // includes는 " 점수차 === -1 || 점수차 === 2 "와 동일한 의미
            console.log('이겼습니다.');
       }else{
            console.log('졌습니다.');
       }

       console.log(나의선택,컴퓨터의선택(이미지좌표));
    });
});