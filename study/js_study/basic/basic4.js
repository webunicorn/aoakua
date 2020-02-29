//지뢰찾기.js
var tbody = document.querySelector('#table tbody');
var dataset = [];

document.querySelector('#exec').addEventListener('click',function(){
    tbody.innerHTML = ''; //실행할때마다 html의 코드를 초기화함
    var hor = parseInt(document.querySelector('#hor').value);
    var ver = parseInt(document.querySelector('#ver').value);
    var mine = parseInt(document.querySelector('#mine').value);


    //지뢰 위치 뽑기
    var 후보군 = Array(hor * ver).fill().map(function(요소, 인덱스){
        return 인덱스;
    });
    var 셔플 = [];
    while(후보군.length > 80){ //20개만 뽑기
        var 이동값 = 후보군.splice(Math.floor(Math.random() * 후보군.length),1)[0]; //섞기
        셔플.push(이동값);
    }
   
    //지뢰 테이블 만들기
    for(var i=0; i< ver; i++){//tr 몇 줄
        var arr = [];
        var tr = document.createElement('tr');
        dataset.push(arr);
        for(var j=0; j<hor; j++){//td 몇 개 
            arr.push(1);
            var td = document.createElement('td');
            td.addEventListener('contextmenu', function(e){ //오른쪽클릭 //깃발 꽂기
                e.preventDefault();
                var 부모tr = e.currentTarget.parentNode;
                var 부모tbody = e.currentTarget.parentNode.parentNode;
                var 칸 = Array.prototype.indexOf.call(부모tr.children, e.currentTarget);
                var 줄 = Array.prototype.indexOf.call(부모tbody.children, 부모tr);
                console.log(부모tr, 부모tbody, e.currentTarget, 칸,줄);
                if(e.currentTarget.textContent === '' || e.currentTarget.textContent === 'X'){
                    e.currentTarget.textContent = '!';
                }else if(e.currentTarget.textContent === '!'){
                    e.currentTarget.textContent = '?';
                }else if(e.currentTarget.textContent === '?'){
                    if(dataset[줄][칸] === 1){
                        e.currentTarget.textContent = '';
                    }else{
                        e.currentTarget.textContent = 'X';
                    }
                }
            });
            td.addEventListener('click',function(e){
                
                var 부모tr = e.currentTarget.parentNode;
                var 부모tbody = e.currentTarget.parentNode.parentNode;
                var 칸 = Array.prototype.indexOf.call(부모tr.children, e.currentTarget);
                var 줄 = Array.prototype.indexOf.call(부모tbody.children, 부모tr);
                if(dataset[줄][칸]){
                    
                }
            });
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }

    //지뢰 심기
    for(var k = 0; k < 셔플.length; k++){ //만약 지뢰 번호가 60면 (0부터 숫자가 시작함)
        var 세로 = Math.floor(셔플[k] / 10); //세로줄 6
        var 가로 = 셔플[k] % 10; //가로줄 0
        tbody.children[세로].children[가로].textContent = 'X'; //화면단에 지뢰 출력
        dataset[세로][가로] = 'X'; //데이터상에 지뢰 넣기
    }
})
