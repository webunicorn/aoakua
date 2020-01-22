let logo = document.querySelector(".logo"),
    gnb = document.querySelector(".gnb li a");

logo.addEventListener("click", function(){
    location.reload();
});

function deviceCheck(){
    let pcDevice = "win16|win32|win64|mac|macintel";
    let thisDevice = navigator.platform;

    if(thisDevice){
        if(pcDevice.indexOf(navigator.platform.toLowerCase()) < 0){
            //mobile
        }else{
            //pc
        }
    }
}

function init(){
    deviceCheck();
}
init();