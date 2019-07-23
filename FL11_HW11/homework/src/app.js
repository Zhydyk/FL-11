let rootNode = document.getElementById('root');

// Your code goes here
let itemCounter = 0;
let maxItems = 10;

//add task
let addButton = document.getElementById('btn-add');
    addButton.onclick = function addItem() {
    let inputValue = document.getElementById('main-input').value;
    if (inputValue !== '') {
        createList(inputValue);
        document.getElementById('main-input').value = '';
        itemCounter++;
        if(itemCounter >= maxItems){
            addButton.disabled = true;
        }
    }
}
    
//Drag&Drop
function allowDrop(ev) {
    ev.preventDefault();
}

function createList(text){
    let ulEl = document.getElementById('list')
    let liEl = document.createElement('li');
        liEl.setAttribute('draggable', 'true');
        liEl.setAttribute('ondragover', 'allowDrop(event)');

    let leftBlock = document.createElement('div');
        leftBlock.setAttribute('class', 'left-block');
    let buttonCheckbox = document.createElement('button');
        buttonCheckbox.setAttribute('id', 'btn-done');
    let checkboxIcon = document.createElement('i');
        checkboxIcon.setAttribute('class', 'material-icons');
        checkboxIcon.innerHTML = 'done';
    let textEl = document.createElement('p');
        textEl.setAttribute('id', 'value-list');
        textEl.innerHTML = text;
    let editButton = document.createElement('button');
        editButton.setAttribute('id', 'btn-edit');
    let editIcon = document.createElement('i');
        editIcon.setAttribute('class', 'material-icons');
        editIcon.innerHTML = 'create';
    let inputEdit = document.createElement('input');
        inputEdit.setAttribute('class', 'editInput');
        inputEdit.setAttribute('style', 'display:none;');
    let rightBlock = document.createElement('div');
        rightBlock.setAttribute('class', 'right-column-delete');
    let deleteButton = document.createElement('button');
        deleteButton.setAttribute('id', 'btn-delete');
    let deleteIcon = document.createElement('i');
        deleteIcon.setAttribute('class', 'material-icons');
        deleteIcon.innerHTML = 'delete';

    //location element
    ulEl.appendChild(liEl);
    //left block
    liEl.appendChild(leftBlock);
    leftBlock.appendChild(buttonCheckbox);
    buttonCheckbox.appendChild(checkboxIcon);
    leftBlock.appendChild(textEl);
    leftBlock.appendChild(inputEdit);
    leftBlock.appendChild(editButton);
    editButton.appendChild(editIcon);
    //right block
    liEl.appendChild(rightBlock);
    rightBlock.appendChild(deleteButton);
    deleteButton.appendChild(deleteIcon);
    
    //delete task
    deleteButton.onclick = function deleteItem(){
        liEl.remove();
        itemCounter--;
        if(itemCounter <= maxItems){
            addButton.disabled = false;
        }
    }
    //disabledCheckbox task
    buttonCheckbox.onclick = function disabledCheckbox(){
        checkboxIcon.setAttribute('style', 'display: block;');
    }
    editButton.onclick = function editList(){
        let button = this;
            button.innerHTML = '<i class="material-icons"> save </i>';
        let listItem = this.parentNode.parentNode;
        let p = listItem.querySelector('p');
            p.style.display = 'none';
        let checkbox = listItem.querySelector('button#btn-done');
            checkbox.style.display = 'none';
        let deleteBut = listItem.querySelector('button#btn-delete');
            deleteBut.style.display = 'none';
        let inputNew = listItem.querySelector('input.editInput');
            inputNew.style.display = 'flex';
            p.innerText = inputNew.value;
            inputNew.value = '';
            p.style.display = 'inline-block';
            
        if(p.innerHTML !== '') {
            inputNew.style.display = 'none';
            button.innerHTML = '<i class="material-icons"> create </i>';
            checkbox.style.display = 'inline-block';
            deleteBut.style.display = 'inline-block';
        }
        
    } 
}