let data = [];
let old_value;
let counterId = 1;
let modify_id;

const rootNode = document.getElementById('root');
const firstDiv = document.createElement('div');
const h1 = document.createElement('h1');
h1.textContent = 'Simple TODO application';
const addnewBtn = document.createElement('input');
addnewBtn.setAttribute('type', 'button');
addnewBtn.className = 'addnewBtn';
addnewBtn.value = 'Add new task';
const empty_p = document.createElement('p');
empty_p.textContent = 'TODO is empty';
empty_p.className = 'emptyText';
const ul = document.createElement('ul');
loadData();
loadFromStorage();
firstDiv.appendChild(h1);
firstDiv.appendChild(addnewBtn);
firstDiv.appendChild(ul);
const secondDiv = document.createElement('div');
const h1_second = document.createElement('h1');
h1_second.textContent = 'Add task';
const addnewInput = document.createElement('input');
addnewInput.setAttribute('type', 'text');
addnewInput.className = 'addnewInput';
const div_second = document.createElement('div');
div_second.className = 'inARow';
const cancleBtn = document.createElement('input');
cancleBtn.setAttribute('type', 'button');
cancleBtn.className = 'cancleBtn';
cancleBtn.value = 'Cancel';
const saveBtn = document.createElement('input');
saveBtn.setAttribute('type', 'button');
saveBtn.className = 'saveBtn';
saveBtn.value = 'Save changes';
div_second.appendChild(cancleBtn);
div_second.appendChild(saveBtn);
secondDiv.appendChild(h1_second);
secondDiv.appendChild(addnewInput);
secondDiv.appendChild(div_second);
const thirdDiv = document.createElement('div');
const h1_third = document.createElement('h1');
h1_third.textContent = 'Modify item';
const modifyItem = document.createElement('input');
modifyItem.setAttribute('type', 'text');
modifyItem.className = 'addnewInput';
const div_third = document.createElement('div');
div_third.className = 'inARow';
const cancleBtn_third = document.createElement('input');
cancleBtn_third.setAttribute('type', 'button');
cancleBtn_third.className = 'cancleBtn';
cancleBtn_third.value = 'Cancel';
const saveBtn_third = document.createElement('input');
saveBtn_third.setAttribute('type', 'button');
saveBtn_third.className = 'saveBtn';
saveBtn_third.value = 'Save changes';
div_third.appendChild(cancleBtn_third);
div_third.appendChild(saveBtn_third);
thirdDiv.appendChild(h1_third);
thirdDiv.appendChild(modifyItem);
thirdDiv.appendChild(div_third);

addnewBtn.addEventListener('click', () => {
    location.hash = '#add';
});

cancleBtn.addEventListener('click', () => {
    addnewInput.value = '';
    location.hash = '#main';
});

cancleBtn_third.addEventListener('click', () => {
    modifyItem.value = '';
    location.hash = '#main';
});

saveBtn_third.addEventListener('click', () => {
    if (modifyItem.value) {
        if (!checkInStorage(modifyItem.value) || modifyItem.value === old_value) {
            for (let i = 0; i < data.length; i++) {
                if (data[i].name === old_value) {
                    data[i].name = modifyItem.value;
                }
            }
            localStorage.setItem('list', JSON.stringify(data));
            modifyItem.value = '';
            location.hash = '#main';
            loadFromStorage();
        } else {
            createMsg('Error! You can`t add already exist item');
        }
    } else {
        createMsg('Error! Field can`t be empty');
    }
});

saveBtn.addEventListener('click', () => {
    if (addnewInput.value) {
        if (checkInStorage(addnewInput.value)) {
            createMsg('Error! You can`t add already exist item');
        } else {
            let obj = {
                name: addnewInput.value,
                checked: false,
                id: Number(counterId)
            }
            localStorage.setItem('counter', ++counterId);
            data.push(obj);
            localStorage.setItem('list', JSON.stringify(data));
            addnewInput.value = '';
            location.hash = '#main';
            loadFromStorage();
        }
    } else {
        createMsg('Error! Field can`t be empty');
    }
});

window.addEventListener('load', () => {
    location.hash = '#main';
    rootNode.appendChild(firstDiv);
});

window.addEventListener('hashchange', () => {
    if (location.hash === '#main') {
        if (rootNode.firstElementChild.children[0].textContent === 'Add task') {
            rootNode.removeChild(secondDiv);
        } else {
            rootNode.removeChild(thirdDiv);
        }
        rootNode.appendChild(firstDiv);
    } else if (location.hash === '#add') {
        rootNode.appendChild(secondDiv);
        rootNode.removeChild(firstDiv);
    } else if (location.hash === '#modify') {
        location.hash = `#/modify/${modify_id}`;
        rootNode.appendChild(thirdDiv);
        rootNode.removeChild(firstDiv);
    }
});

function loadFromStorage() {
    sortChecked();
    while (ul.lastChild) {
        ul.removeChild(ul.lastChild);
    }
    if (data.length !== 0) {
        for (let i = 0; i < data.length; i++) {
            const li = document.createElement('li');
            const checkbox = document.createElement('img');
            checkbox.setAttribute('alt', 'checkbox');
            checkbox.style.cursor = 'pointer';
            const p = document.createElement('p');
            p.textContent = data[i].name;
            p.className = 'item_text';
            const remove = document.createElement('img');
            remove.setAttribute('src', './assets/img/remove-s.jpg');
            remove.setAttribute('alt', 'remove');
            remove.style.cursor = 'pointer';
            li.appendChild(checkbox);
            li.appendChild(p);
            li.appendChild(remove);
            ul.appendChild(li);
            if (data[i].checked) {
                checkbox.setAttribute('src', './assets/img/done-s.png');
                li.setAttribute('style', 'background-color: gray');
            } else {
                checkbox.setAttribute('src', './assets/img/todo-s.png');
                li.removeAttribute('style');
            }
            checkbox.addEventListener('click', (e) => {
                let text = e.target.nextSibling.textContent;
                for (let i = 0; i < data.length; i++) {
                    if (data[i].name === text) {
                        data[i].checked = !data[i].checked;
                    }
                }
                localStorage.setItem('list', JSON.stringify(data));
                loadFromStorage();
            });

            p.addEventListener('click', (e) => {
                for (let i = 0; i < data.length; i++) {
                    if (data[i].name === e.target.textContent) {
                        modify_id = data[i].id;
                    }
                }
                old_value = e.target.textContent;
                modifyItem.value = e.target.textContent;
                if (e.target.parentNode.hasAttribute('style')) {
                    createMsg('You can`t edit already done item');
                } else {
                    location.hash = '#modify';
                }
            });

            remove.addEventListener('click', (e) => {
                let text = e.target.previousSibling.textContent;
                e.target.parentNode.parentNode.removeChild(e.target.parentNode);
                for (let i = 0; i < data.length; i++) {
                    if (data[i].name === text) {
                        data.splice(i, 1)
                    }
                }
                localStorage.setItem('list', JSON.stringify(data));
                sortChecked();
                loadFromStorage();
            });
        }
    } else {
        ul.appendChild(empty_p);
    }
}

function checkInStorage(el) {
    let istrue = 0;
    for (let i = 0; i < data.length; i++) {
        for (let prop in data[i]) {
            if (data[i][prop] === el) {
                istrue = 1;
            }
        }
    }
    if (istrue) {
        return true;
    } else {
        return false;
    }
}

function sortChecked() {
    if (data.length !== 0) {
        let unchecked_elements_arr = [];
        let checked_elements_arr = [];
        for (let i = 0; i < data.length; i++) {
            if (data[i].checked === true) {
                unchecked_elements_arr.unshift(data[i]);
            } else {
                checked_elements_arr.push(data[i]);
            }
        }
        data = checked_elements_arr.concat(unchecked_elements_arr);
        localStorage.setItem('list', JSON.stringify(data));
    }
}

function createMsg(text) {
    const timer = 2000;
    let isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    const alerMsg = document.createElement('div');
    alerMsg.className = 'alertMsg';
    alerMsg.textContent = text;
    alerMsg.style.display = 'block';
    if (isChrome) {
        alerMsg.style.left = '1%';
    } else {
        alerMsg.style.right = '1%';
    }
    setTimeout(() => {
        rootNode.removeChild(alerMsg);
    }, timer);
    rootNode.appendChild(alerMsg);
}

function loadData() {
    if (localStorage.getItem('list')) {
        data = JSON.parse(localStorage.getItem('list'));
    }
    if (localStorage.getItem('counter')) {
        counterId = localStorage.getItem('counter');
    }
}