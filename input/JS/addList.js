const buttonAddtaskList = document.querySelectorAll('button');

const clearInput = () => {
    return document.querySelector('input').value = '';
}

const createParagraphTaskList = () => {   

    let inputTaskList = document.querySelector('input').value;

    let createParagraph = document.createElement('p');

    createParagraph.textContent = inputTaskList;   
    
    document.body.append(createParagraph);   

    clearInput();
}

for(let i = 0; i < buttonAddtaskList.length; i++) {
    buttonAddtaskList[i].addEventListener('click', createParagraphTaskList);
}


