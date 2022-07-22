const buttonAddTask = document.querySelectorAll('button');

const clearInput = () => {
    
    return document.querySelector('input').value = '';
}

const createParagraphTasks = () => {   

    let inputTasks = document.querySelector('input').value;

    let createParagraph = document.createElement('p');

    createParagraph.textContent = inputTasks;   
    
    document.body.append(createParagraph);   

    clearInput();
}

for(let i = 0; i < buttonAddTask.length; i++) {
    buttonAddTask[i].addEventListener('click', createParagraphTasks);
}


