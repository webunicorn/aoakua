//로또 추첨기

/*
var 후보군 = Array(45);
var 필 = 후보군.fill(); //빈 배열에 undefined를 채우기 주의:fill메서드는 ie에서 안됨

필.forEach(function(요소, 인덱스){
    console.log(요소, 인덱스 +1);
});
*/

var 후보군 = Array(45).fill().map(function(요소, 인덱스){ //숫자 45개 만들기
    return 인덱스 + 1;
});

console.log(후보군);

var 셔플 = [];
while(후보군.length > 0){
    var 이동값 = 후보군.splice(Math.floor(Math.random() * 후보군.length),1)[0]; //랜덤으로 돌리고 반내림하고 splice로 한 개 요소 제거 그리고 배열값 0 을 가져옴
    셔플.push(이동값); //후보군이 사라질때까지 셔플에 넣기
}

console.log(셔플);
var 보너스 = 셔플[셔플.length -1]; //마지막 숫자 가져오기
var 당첨숫자들 = 셔플.slice(0,6); //6개 숫자 가져오기 0에서 6번째짜리 까지 가져옴 0,1,2,3,4,5 
console.log('당첨숫자',당첨숫자들.sort(function(p, c){return p-c;}),'보너스',보너스);

var 결과창 = document.querySelector('#결과창');

for(var i = 0; i < 당첨숫자들.length; i ++){
    var 공 = document.createElement('p');
    공.textContent = 당첨숫자들[i];
    결과창.appendChild(공);
}
var 보너스칸 = document.querySelector('.보너스');
var 보너스공 = document.createElement('div');
보너스공.textContent = 보너스;
보너스칸.appendChild(보너스공);