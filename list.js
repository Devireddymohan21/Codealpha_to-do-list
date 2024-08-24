document.getElementById('todo-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const todoInput = document.getElementById('todo-input');
    const todoText = todoInput.value.trim();
    
    if (todoText !== "") {
        const todoList = document.getElementById('todo-list');
        
        const li = document.createElement('li');
        li.textContent = todoText;
        
        li.addEventListener('click', function() {
            li.classList.toggle('completed');
        });
        
        todoList.appendChild(li);
        
        todoInput.value = "";
    }
});