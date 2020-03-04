var today = document.querySelector('.today');
var inputText = document.querySelector('.input_text');
var btnAdd = document.querySelector('.js-add');
var todoList = document.querySelector('.todo_list');

//complete
todoList.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('complete');
    }
}, false);

function addTodoList(){
    if(inputText.value === ''){
        return;
    }
    //add list
    var list = document.createElement('li');
    list.innerHTML = inputText.value;
    todoList.insertBefore(list, todoList.firstChild);
    inputText.value = '';

    //delete
    var del = document.createElement('span');
    del.textContent = '\u00D7';
    list.appendChild(del);
    del.classList.add('delete');
    del.addEventListener('click',function(){
        this.parentNode.style.display = 'none';
    });
}



btnAdd.addEventListener('click', addTodoList);

inputText.addEventListener('keyup',function(e){
    if(e.keyCode === 13){
        e.preventDefault();
        addTodoList();
    }
});

/*
function getTime(){
    const date = new Date();
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    
    today.innerText = `${hour < 10 ? `0${hour}` : hour}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}

getTime();
setInterval(getTime, 1000);

*/

