const today = document.querySelector('.today');
const inputText = document.querySelector('.input_text');
const btnAdd = document.querySelector('.js-add');
const todoList = document.querySelector('.todo_list');

//complete
todoList.addEventListener('click', e => {
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('complete');
    }
}, false);

function addTodoList(){
    if(inputText.value === ''){
        return;
    }
    //add list
    
    const list = document.createElement('li');
    list.innerHTML = inputText.value;
    todoList.insertBefore(list, todoList.firstChild);
    inputText.value = '';

    //delete
    const del = document.createElement('span');
    del.textContent = '\u00D7';
    list.appendChild(del);
    del.classList.add('delete');
    del.addEventListener('click',function(){
        this.parentNode.style.display = 'none';
    });
}

btnAdd.addEventListener('click', addTodoList);

inputText.addEventListener('keyup', e => {
    if(e.keyCode === 13){
        e.preventDefault();
        addTodoList();
    }
})
