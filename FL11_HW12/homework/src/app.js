// Your code goes here
const rootNode = document.getElementById('root');
let itemCounter = 0;
let maxItems = 10;
let mainEl = document.getElementById('main');

let addItems = document.getElementById('add');
    addItems.onclick = () => {
        clearDivEl(mainEl);
        addElements(mainEl);
}


function addElements() {
    let h1El = document.createElement('h1');
        h1El.innerHTML = 'Add task';
    let inputEl = document.createElement('input');
        inputEl.setAttribute('id', 'input');
        inputEl.setAttribute('type', 'text');
    let containButtonsDivEl = document.createElement('div');
        containButtonsDivEl.setAttribute('class', 'buttonsDiv');
    let addButtonEl = document.createElement('button');
        addButtonEl.setAttribute('id', 'add');
        addButtonEl.setAttribute('onclick', 'addItem()');
        addButtonEl.innerHTML = 'Save changes';
    let btnCancelEl = document.createElement('button');
        btnCancelEl.setAttribute('id', 'cancel');
        btnCancelEl.setAttribute('onclick', 'cancelAction()');
        btnCancelEl.innerHTML = 'Cancel';
    let divListEl = document.createElement('div');
        divListEl.setAttribute('class', 'list');
    let ulEl = document.createElement('ul');
        ulEl.setAttribute('id', 'list');
//page markup
        mainEl.appendChild(h1El);
        mainEl.appendChild(inputEl);
        mainEl.appendChild(containButtonsDivEl);
        mainEl.appendChild(divListEl);
        containButtonsDivEl.appendChild(btnCancelEl);
        containButtonsDivEl.appendChild(addButtonEl);
        divListEl.appendChild(ulEl);
//Button Cancel
    btnCancelEl.onclick = function cancelAction() {
        window.location.assign('index.html');
    }
// Add Item
    addButtonEl.onclick = function addItem() {
        let inputValue = document.getElementById('input').value;
        if (inputValue !== '') {
            createList(inputValue);
            document.getElementById('input').value = '';
            itemCounter++;
            if(itemCounter >= maxItems){
                addButtonEl.disabled = true;
            }
        } else if (inputValue === '') {
            addButtonEl.disabled = false;
        }
//Insert Bottom
        let insertBottom = (item, list) => {
            item.remove();
            list.appendChild(item);
        }
//Function Create List    
        function createList(text){
            let liEl = document.createElement('li');
                liEl.setAttribute('class', 'item-style');
            let checkboxIcon = document.createElement('img');
                checkboxIcon.setAttribute('src', './assets/img/todo-s.png');
            let spanEl = document.createElement('span');
                spanEl.innerHTML = text;
            let iconDeleteEl = document.createElement('img');
                iconDeleteEl.setAttribute('src', './assets/img/remove-s.jpg');
//page markup
                ulEl.appendChild(liEl);
                liEl.appendChild(checkboxIcon);
                liEl.appendChild(spanEl);
                liEl.appendChild(iconDeleteEl);
//Change checkbox mark and background
            checkboxIcon.onclick = function() {
                    checkboxIcon.src = './assets/img/done-s.png';
                    liEl.style.setProperty('background-color', '#999999');
                
                insertBottom(liEl, ulEl);
            }
//delete list
            iconDeleteEl.onclick = function() {
                liEl.remove();
                itemCounter--;
                if(itemCounter < maxItems){
                    addButtonEl.disabled = false;
                }

            }
        }
    }

}
function clearDivEl(div) {
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }
}

