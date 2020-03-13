const slides = document.querySelector('.slider_list').children;
const prevBtn = document.querySelector('.slider_btn .btn_prev');
const nextBtn = document.querySelector('.slider_btn .btn_next');
const indicater = document.querySelectorAll('.slider_indicater li');
const sWid = slides[0].offsetWidth;
let index = 0;
let currentX;
 

/*** slider ***/
function prevSlide(){ 
    if(0 >= index){
        return;
    }
    index--;
    slideMove();  
}

function nextSlide(){
    if(index === slides.length-1){
        return;
    }
    index++;
    slideMove('next');
}

function slideMove(prm){
    for(let i = 0; i < slides.length; i++){
        currentX = slides[i].style.left.split('p');
        if(prm === 'next'){
            slides[i].style.left = Number(currentX[0]) - sWid + 'px';
        }else{
            slides[i].style.left = Number(currentX[0]) + sWid + 'px';
        }
        indicater[i].classList.remove('active');
    }
    indicater[index].classList.add('active');
}

indicater.forEach((e,idx) => {
    e.addEventListener('click', function(){
        let currnetIdx = index;
        index = idx;
        let c = currnetIdx - idx;
        for(let i = 0; i < slides.length; i++){
            currentX = slides[i].style.left.split('p');
            slides[i].style.left = Number(currentX[0]) + sWid * c + 'px';
            indicater[i].classList.remove('active');
        }
        indicater[idx].classList.add('active');
    })
});

prevBtn.addEventListener('click',function(){
    prevSlide();
});

nextBtn.addEventListener('click',function(){
    nextSlide();
});

function init(){
    for(let i=0; i<slides.length; i++){
        slides[i].style.left = i*sWid + 'px';
    }
    indicater[0].classList.add('active');
}

init();



