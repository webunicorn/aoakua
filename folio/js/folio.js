let logo = document.querySelector(".logo"),
    gnb = document.querySelector(".gnb li a");

logo.addEventListener("click", function(){
    location.reload();
});

function deviceCheck(){
    const pcDevice = "win16|win32|win64|mac|macintel";
    const thisDevice = navigator.platform;
    let workList = document.querySelector("#main .work .work_list");

    if(thisDevice){
        if(pcDevice.indexOf(navigator.platform.toLowerCase()) < 0){
            //mobile
            workList.classList.remove("effect");
        }else if(navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/Tablet/i)||navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/iPhone|iPod/i) ){
            //tablet
            workList.classList.remove("effect");
            
        }else{
            //pc
            console.log("pc");
        }
    }
}

function init(){
    deviceCheck();
}
init();