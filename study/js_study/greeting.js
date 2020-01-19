const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings"); 

const USER_LS = "currentUser", //유저 로컬스토리지 체크를 위해
    SHOWING_CN = "showing";

function saveName(text){ //local에 받은 데이터 저장
    localStorage.setItem(USER_LS, text) //setItem으로 currentUser에 폼에 작성한 값을 저장
}

function handleSubmit(event){
    event.preventDefault(); //폼  버블링 방지
    const currentValue = input.value; //input에 있는 value값을 가져온다
    paintGreeing(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOWING_CN); //유저네임이 없을때 폼을 보여라
    form.addEventListener("submit", handleSubmit);
}

function paintGreeing(text) { //유저 이름을 파라미터로 받아서 h4 텍스트로 뿌려준다
    form.classList.remove(SHOWING_CN); //유저네임이 있으면 폼을 숨겨라
    greeting.classList.add(SHOWING_CN); //유저네임이 있으면 h4를 보여라
    greeting.innerText = `Hello ${text} !!`;
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    
    if(currentUser === null){
        //유저 네임 없을 때
        askForName(); 
    }else{
        //유저 네임 있을 때  
        paintGreeing(currentUser);
    }
}


function init(){
    loadName();
}
init();