console.log('It Works! :D');

class Transaction {
    constructor(name, pib, dateIssued, value) {
        this.name = name;
        this.pib = pib;
        this.dateIssued = dateIssued;
        this.value = value;
        this.currency = 'RSD';
        let date = new Date();
        this.timestamp = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
        this.dateStamp = getDate();
    }
}

let transactions = [];

const btnLog = document.querySelector('#btn-log');
btnLog.addEventListener('click', () => {
    console.log(transactions);
});

const txtCompanyName = document.querySelector('#txt-company-name');
const txtCompanyPIB = document.querySelector('#txt-company-pib');
const txtTime = document.querySelector('#txt-time');
const txtValue = document.querySelector('#txt-value');
const btnAdd = document.querySelector('#btn-add');
const itemList = document.querySelector('#item-list');

[txtCompanyName, txtCompanyPIB, txtTime, txtValue].forEach(el => {
    el.addEventListener('keyup', (e) => {
        if(e.keyCode == 13) addTransaction();
    });
});

btnAdd.addEventListener('click', addTransaction);

function addTransaction() {
    let transaction = new Transaction(txtCompanyName.value.trim(), txtCompanyPIB.value, txtTime.value, txtValue.value);
    if(transaction.name == '') {
        return alert('Invalid comapny name!');
    }
    if(transaction.pib.length != 8 || isNaN(transaction.pib)) {
        return alert('Invalid PIB');
    }
    if(transaction.dateIssued == '') {
        return alert('Invalid date');
    }
    if(isNaN(transaction.value) || transaction.value == '') {
        return alert('Invalid value');
    }
    let itemContainer = document.createElement('div');
    itemContainer.className = 'item-container';
    let itemInfo = document.createElement('div');
    itemInfo.className = 'item-info';
    let itemInfoDivOne = document.createElement('div');
    addLabel('company-name', transaction.name, itemInfoDivOne);
    addLabel('company-pib', transaction.pib, itemInfoDivOne);
    addLabel('time-created', `${transaction.dateIssued}`, itemInfoDivOne);
    addLabel('price-value', `${transaction.value} ${transaction.currency}`, itemInfoDivOne);
    let itemInfoDivTwo = document.createElement('div');
    let currentDateTime = `<span>[${getDate()}]</span><span>${getTime()}</span>`;
    addLabel('insert-timestamp', currentDateTime, itemInfoDivTwo);
    itemInfo.appendChild(itemInfoDivOne);
    itemInfo.appendChild(itemInfoDivTwo);
    let itemActions = document.createElement('div');
    itemActions.className = 'item-actions';
    let btnDelete = document.createElement('button');
    btnDelete.className = 'item-trashCan';
    btnDelete.innerHTML = 'DELETE';
    btnDelete.addEventListener('click', deleteTransaction);
    itemActions.appendChild(btnDelete);
    itemContainer.appendChild(itemInfo);
    itemContainer.appendChild(itemActions);
    itemList.appendChild(itemContainer);
    console.log(transaction);

    txtCompanyName.value = '';
    txtCompanyPIB.value = '';
    txtTime.value = '';
    txtValue.value = '';

    transactions.push(transaction);
}

function deleteTransaction(e) {
    e.target.parentElement.parentElement.remove();
}

function addLabel(labelClass, labelValue, parentElem) {
    let label1 = document.createElement('label');
    label1.className = labelClass;
    label1.innerHTML = labelValue + ' ';
    parentElem.appendChild(label1);
}

function getDate() {
    let date = new Date();
    return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
}

function getTime() {
    let date = new Date();
    return `@${date.getHours()}:${date.getMinutes()}`;
}


let title = document.querySelector('h1');
title.style.position = 'absolute';
title.style.display = 'inline';
let w = 1000;
let h = 570;
let x = 150;
let y = 50;

let bX = true;
let bY = true;

function chColor() {
    title.style.color = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
    title.style.top =`${y}px`;
    title.style.left =`${x}px`;
    if(x + title.style.width >= w)
    bX = !bX;
    if(x <= 0) bX = !bX;
    if(y + title.style.height >= h)
    bY = !bY;
    if(y <= 0) bY = !bY;
    if(bX)
    x+= 15;
    else x -= 15;
    if (bY)
    y+= 10;
    else y -= 10;
    setTimeout(chColor, 100);
}

chColor();
