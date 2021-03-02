const formElement = document.querySelector('form');
const listItem = document.getElementById('mylist');

formElement.addEventListener('submit', event => {
    event.preventDefault();
    const inputElementValue = document.getElementById('item').value.trim();
    console.log(inputElementValue);
    if (inputElementValue.length <= 28 && inputElementValue.length > 0) {
        createListItem(inputElementValue);
    } else {
        setErrorMsg(inputElementValue);
    }
    formElement.reset();
})

function setErrorMsg(input) {
    if (input.length > 28) {
        alert('Character max limit exceed')
    } else {
        alert('Fil the value');
    }
}

function createListItem(inputValue) {
    let li = document.createElement('LI');
    let liText = document.createTextNode(inputValue);
    li.append(liText);
    let span = document.createElement('SPAN');
    let spanText = document.createTextNode('x');
    span.append(spanText);
    li.appendChild(span);
    listItem.appendChild(li);
    console.log(li);
}

listItem.addEventListener('click', e => {
    if(e.target.tagName == 'LI'){
        e.target.style.backgroundColor = '#ff6b81';
    }
    if (e.target.tagName == 'SPAN') {
        e.target.parentElement.style.display = 'none';
    }
})

listItem.addEventListener('dblclick', e => {
    e.target.style.backgroundColor = '';
})
