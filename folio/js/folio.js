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
        }else if(navigator.userAgent.indexOf("Android")>0 || 
        navigator.userAgent.indexOf("iPhone") > 0|| 
        navigator.userAgent.indexOf("iPod") > 0|| 
        navigator.userAgent.indexOf("BlackBerry") > 0){
            //tablet
            workList.classList.remove("effect");
        }else{
            //pc
        }
    }
}

function init(){
    deviceCheck();
}
init();