const input = document.querySelector('input')
let btn = document.querySelector('.btn')
let  todo = document.querySelector('.todo')





btn.addEventListener('click',(e)=>{
e.preventDefault()
const todolist = document.createElement('li')
const delbtn = document.createElement('button')
const completeBtn = document.createElement('button')
let taskText = document.createElement('span')

if(input.value.trim() === "") return

taskText.textContent = input.value
delbtn.innerText = 'delete'
completeBtn.innerText = 'complete'


console.log('todolist',todolist);





console.log(delbtn);
console.log(completeBtn);


delbtn.addEventListener('click',()=>{
// todo.removeChild(todolist)
// todo.removeChild(delbtn)

// since the delete is in the todolist we can remove element directly

todolist.remove()

})



completeBtn.addEventListener('click',()=>{
    // todolist.style.textDecoration = todolist.style.textDecoration === 'line-through'? "none" :'line-through'
    // todolist.style.textDecoration === 'line-through'? completeBtn.innerText = 'uncomplete' : completeBtn.innerText = 'complete'

    const isCompleted = todolist.style.textDecoration === 'line-through'
    todolist.style.textDecoration = isCompleted ? 'none' : 'line-through'
    completeBtn.innerText = isCompleted ? 'uncomplete' :'complete'
})



// span 
// add currenttext in to span 
// add eventlistenr on the db clickeed 
// then replace span eith the edit


todolist.addEventListener('dblclick', () => {
  
    const currentText = taskText.textContent;
    const editInput = document.createElement('input');
    editInput.value = currentText;
    editInput.style.width = '50%';
    todolist.replaceChild(editInput, taskText);
    editInput.focus();

    editInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        taskText.textContent = editInput.value;
        todolist.replaceChild(taskText, editInput);
      }
    });
  });



//   todolist.textContent = input.value


  todolist.appendChild(taskText)
todo.appendChild(todolist)
// todo.appendChild(delbtn)
todolist.appendChild(delbtn) // addding direct btn to the todolist insted of the todos 
todolist.appendChild(completeBtn)
input.value = ''



  
    
})



 
