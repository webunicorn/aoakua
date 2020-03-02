//지뢰찾기.js
var tbody = document.querySelector('#table tbody');
var dataset = [];
var 중단플래그 = false;
var 열은칸 = 0;
var 코드표 = { //복잡한 데이터는 딕셔너리로 정리
    연칸 : -1,
    물음표 : -2,
    깃발 : -3,
    깃발지뢰 : -4,
    물음표지뢰 : -5,
    지뢰 : 1,
    보통칸 : 0
};
document.querySelector('#exec').addEventListener('click',function(){
    //내부 초기화
    tbody.innerHTML = ''; //실행할때마다 html의 코드를 초기화함
    중단플래그 = false; //코드의 흐름을 좌우하는 변수
    dataset = [];//초기화
    열은칸 = 0;
    document.querySelector('#result').textContent = '';//초기화
    var hor = parseInt(document.querySelector('#hor').value);
    var ver = parseInt(document.querySelector('#ver').value);
    var mine = parseInt(document.querySelector('#mine').value);
    //지뢰 위치 뽑기
    var 후보군 = Array(hor * ver).fill().map(function(요소, 인덱스){
        return 인덱스;
    });
    var 셔플 = [];
    while(후보군.length > hor * ver - mine){ //20개만 뽑기
        var 이동값 = 후보군.splice(Math.floor(Math.random() * 후보군.length),1)[0]; //섞기
        셔플.push(이동값);
    }
   
    //지뢰 테이블 만들기
    for(var i=0; i< ver; i++){//tr 몇 줄
        var arr = [];
        var tr = document.createElement('tr');
        dataset.push(arr);
        for(var j=0; j<hor; j++){//td 몇 개 
            arr.push(코드표.보통칸); //데이터 2차원 배열에 0이 기본
            var td = document.createElement('td');
            //오른쪽 클릭 --깃발 꽂기
            td.addEventListener('contextmenu', function(e){  
                e.preventDefault();
                if(중단플래그){
                    return; //함수가 끝남
                }
               
                var 부모tr = e.currentTarget.parentNode;
                var 부모tbody = e.currentTarget.parentNode.parentNode;
                var 칸 = Array.prototype.indexOf.call(부모tr.children, e.currentTarget);
                var 줄 = Array.prototype.indexOf.call(부모tbody.children, 부모tr);
                console.log(부모tr, 부모tbody, e.currentTarget, 칸,줄);
                if(e.currentTarget.textContent === '' || e.currentTarget.textContent === 'X'){
                    e.currentTarget.textContent = '!';
                    e.currentTarget.classList.add('flag');
                    if(dataset[줄][칸] === 코드표.지뢰){
                        dataset[줄][칸] = 코드표.깃발지뢰;
                    }else{
                        dataset[줄][칸] = 코드표.깃발;
                    }
                }else if(e.currentTarget.textContent === '!'){
                    e.currentTarget.textContent = '?';
                    e.currentTarget.classList.remove('flag');
                    e.currentTarget.classList.add('question');
                    if(dataset[줄][칸] === 코드표.깃발지뢰){
                        dataset[줄][칸] = 코드표.물음표지뢰;
                    }else{
                        dataset[줄][칸] = 코드표.물음표;
                    }
                }else if(e.currentTarget.textContent === '?'){
                    e.currentTarget.classList.remove('question');
                    if(dataset[줄][칸] === 코드표.물음표지뢰){
                        e.currentTarget.textContent = 'X';
                        dataset[줄][칸] = 코드표.지뢰;
                    }else{
                        e.currentTarget.textContent = '';
                        dataset[줄][칸] = 코드표.보통칸;
                    }
                }
            });

            //왼쪽 클릭했을 때
            td.addEventListener('click',function(e){
                if(중단플래그){
                    return; //함수가 끝남
                }
                var 부모tr = e.currentTarget.parentNode;
                var 부모tbody = e.currentTarget.parentNode.parentNode;
                var 칸 = Array.prototype.indexOf.call(부모tr.children, e.currentTarget);
                var 줄 = Array.prototype.indexOf.call(부모tbody.children, 부모tr);
                if([코드표.연칸, 코드표.깃발, 코드표.깃발지뢰, 코드표.물음표지뢰, 코드표.물음표].includes(dataset[줄][칸])){ //클릭할때 데이터값이 이러하면 실행X
                    return;
                }
                e.currentTarget.classList.add('opened');
                열은칸 += 1; //열때마다 1 추가
                if(dataset[줄][칸] === 코드표.지뢰){
                    e.currentTarget.textContent = '펑';
                    document.querySelector('#result').textContent = '실패ㅠㅠ';
                    중단플래그 = true; //중단 플래그를 true로 변경
                }else{ //클릭한 곳 상하좌우칸 -- 지뢰가 아닌 경우 주변 지뢰 개수
                    dataset[줄][칸] = 코드표.연칸; //기본 0인 텍스트를 클릭하면 1이되게 바꿈. 중복을 피하기 위해 설정
                    var 주변 = [dataset[줄][칸-1], dataset[줄][칸+1]]; //현재줄은 항상 있음
                    if(dataset[줄-1]){//이전 줄이 있는 경우 concat을 이용해 배열을 더해 새로운 배열로 만든다
                        주변 = 주변.concat([dataset[줄-1][칸-1], dataset[줄-1][칸], dataset[줄-1][칸+1]]);
                    }
                    if(dataset[줄+1]){//이후 줄이 있는 경우
                        주변 = 주변.concat([dataset[줄+1][칸-1], dataset[줄+1][칸], dataset[줄+1][칸+1]]);
                    }
                    //주변에 폭탄이 몇 개 있는지 확인 하고 숫자 표시
                    var 주변지뢰개수 = 주변.filter(function(v){
                        return [코드표.지뢰, 코드표.깃발지뢰, 코드표.물음표지뢰].includes(v);
                    }).length; 
                    e.currentTarget.textContent = 주변지뢰개수 || ''; //앞에 값이 거짓인 값(false, '', null, 0, undefined, NaN)이면 뒤에 있는 걸 써라
                    if(주변지뢰개수 === 0){
                        //주변 8칸 동시 오픈
                        var 주변칸 = [];
                        if(tbody.children[줄-1]){ //이전 줄 
                            주변칸 = 주변칸.concat([
                                tbody.children[줄-1].children[칸-1],
                                tbody.children[줄-1].children[칸],
                                tbody.children[줄-1].children[칸+1]
                            ]);
                        }
                        주변칸 = 주변칸.concat([ //현재 줄
                            tbody.children[줄].children[칸-1],
                            tbody.children[줄].children[칸+1],
                        ]);
                        if(tbody.children[줄+1]){ //이후 줄 
                            주변칸 = 주변칸.concat([
                                tbody.children[줄+1].children[칸-1],
                                tbody.children[줄+1].children[칸],
                                tbody.children[줄+1].children[칸+1]
                            ]);
                        }

                        주변칸.filter(function (v){
                            return !!v; //null,undefined,0,'' 을 제거하는 코드 === 주변칸.filter((v) => !!v)
                        }).forEach(function(옆칸){
                            var 부모tr = 옆칸.parentNode;
                            var 부모tbody = 옆칸.parentNode.parentNode;
                            var 옆칸칸 = Array.prototype.indexOf.call(부모tr.children, 옆칸);
                            var 옆칸줄 = Array.prototype.indexOf.call(부모tbody.children, 부모tr);
                            if(dataset[옆칸줄][옆칸칸] !== 코드표.연칸){ //열어진 칸을 제외하고 열어라
                                옆칸.click();
                            }
                        });
                        
                    }
                }
                if(열은칸 === hor * ver - mine){
                    중단플래그 = true; //중단
                    document.querySelector('#result').textContent = '성공!!';
                }
            });
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }

    //지뢰 심기
    for(var k = 0; k < 셔플.length; k++){ //만약 지뢰 번호가 60면 (0부터 숫자가 시작함)
        var 세로 = Math.floor(셔플[k] / ver); //세로줄 6
        var 가로 = 셔플[k] % ver; //가로줄 0
        tbody.children[세로].children[가로].textContent = 'X'; //화면단에 지뢰 출력
        dataset[세로][가로] = 코드표.지뢰; //데이터상에 지뢰 넣기
    }
})
