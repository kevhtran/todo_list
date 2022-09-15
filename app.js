// const ul = document.querySelector("#list");
const form = document.querySelector("#addTodo");
const list = document.querySelector("#list");
const input = document.querySelector("#todo");


list.addEventListener('click', function(e){
    if (e.target.tagName === 'BUTTON'){
        e.target.parentElement.remove();
        localStorage.setItem('li', list.innerHTML)
    }
    const li = e.target.closest("li");
    if (li.style.textDecoration = 'none'){
        li.style.textDecoration = 'line-through'
        localStorage.setItem('li', list.innerHTML)
    }
});

form.addEventListener('submit', function(e){
  e.preventDefault();
  const newTodo = document.createElement("li");
  const removeBtn = document.createElement("button");
  removeBtn.innerText = "Remove";
  newTodo.classList = "todo";
  newTodo.innerText = input.value;
  newTodo.appendChild(removeBtn);
  list.appendChild(newTodo);
  input.value = "";
  localStorage.setItem('li', list.innerHTML)
});

list.addEventListener('dblclick', function(e){
    const li = e.target.closest("li");
    if (li.style.textDecoration = 'line-through'){
        li.style.textDecoration = 'none'
        localStorage.setItem('li', list.innerHTML)
    }
});

document.addEventListener('DOMContentLoaded', function(e){
    console.log('fully loaded');
    console.log(localStorage.getItem('li'))
    list.innerHTML = localStorage.getItem('li')
});
