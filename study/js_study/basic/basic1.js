
//숫자야구 만들기
var 바디 = document.body;
var 숫자후보;
var 숫자배열;

function 숫자뽑기(){
    숫자후보 = [1,2,3,4,5,6,7,8,9];
    숫자배열 = [];
    for(var i=0; i<4; i+=1){
        var 뽑은것 = 숫자후보.splice(Math.floor(Math.random()*(9-i)),1)[0]; //splice는 배열로 나오기때문에 [0] 배열값을 가져와야함
        숫자배열.push(뽑은것);
    }
}

숫자뽑기();
console.log(숫자배열);

var 결과 = document.createElement('h1');
바디.append(결과);
var 폼 = document.createElement('form');
document.body.append(폼);
var 입력창 = document.createElement('input');
폼.append(입력창);
입력창.type = 'text';
입력창.maxLength = 4; //입력제한
var 버튼 = document.createElement('button');
버튼.textContent = '입력!';
폼.append(버튼);

var 틀린횟수 = 0;

폼.addEventListener('submit',function(e){ //엔터를 쳤을때 [비동기]
    e.preventDefault();
    var 답 = 입력창.value; //입력값
    console.log(답,);
    if(답 === 숫자배열.join('')){//join을 사용하여 배열인 숫자배열을 문자로 변경해준다.
        //답이 맞으면 
        결과.textContent = '홈런';
        입력창.value = '';
        입력창.focus();
        바디 = document.body;
        숫자뽑기();
        틀린횟수 = 0;
    }else{
        //답이 틀리면
        var 답배열 = 답.split('');
        var 스트라이크 = 0;
        var 볼 = 0;
        틀린횟수 ++; //틀리면 횟수 증가

        if(틀린횟수 > 4){ //4번 넘게 틀린 경우
            결과.textContent = '4번 넘게 틀려서 실패 ! 답은' + 숫자배열.join(',') + '였습니다';
            숫자뽑기();
            입력창.value = '';
            입력창.focus();
            틀린횟수 = 0;
        }else{//4번 미만으로 틀린 경우
            for(var i = 0; i<3; i+=1){ //4자리수 비교
                if(Number(답배열[i]) === 숫자배열[i]){//같은 자리인지 확인
                    스트라이크++; //맞으면 스트라이크 수 증가
                }else if(숫자배열.indexOf(Number(답배열[i])) > -1){//같은 자리는 아니지만, 숫자가 겹치는지 확인
                    볼++; //볼 수 추가
                }
            }
            결과.textContent = 스트라이크 + '스크라이크' + 볼 + '볼입니다.';
            입력창.value = '';
            입력창.focus();
        }
       
    }

});