'use strict'
function Prefume(name, quantity, price){
    this.Prefname = name; 
    this.Prefquantity = quantity;
    this.Prefprice = price;
    Prefume.all.push(this);
};
Prefume.all = [];
console.log(Prefume.all);

get();
var form = document.querySelector('#form');
form.addEventListener('submit', function(event){
    event.preventDefault();
    var name = event.target[0].value;
    var quantity = event.target[1].value;
    if(name !== '' && quantity !== ''){
        var price = getRandomNumber(120, 270)*quantity;
        new Prefume(name, quantity, price);
        bodyOfTable();
        set();
    }else{
        alert('Please enter your prefume name and quantity');
    }
});
var tab = document.querySelector('#tab');
function headerOfTable(){
    var tr = document.createElement('tr');
    var th = document.createElement('th');
    th.textContent = 'Prefume';
    var th1 = document.createElement('th');
    th1.textContent = 'Quantity';
    var th2 = document.createElement('th');
    th2.textContent = 'Price';
    var th3 = document.createElement('th');
    th3.textContent = 'Remove';
    tr.append(th, th1, th2, th3);
    tab.append(tr);
};
headerOfTable();
console.log(headerOfTable());

function bodyOfTable(){
    for(var i = 0; i < Prefume.all.length; i++){
        var tr = document.createElement('tr');
        var td = document.createElement('td');
        td.textContent = Prefume.all[i]. name;
        var td1 = document.createElement('td');
        td1.textContent = Prefume.all[i].quantity;
        var td2 = document.createElement('td');
        td2.textContent = `${Prefume.all[i].peice}$`;
        var td3 = document.createElement('td');
        var btn = document.createElement('button');
        btn.textContent = 'X';
        td3.append(btn);
        tr.append(td, td1, td2, td3);
        tab.append(tr);
    }
};
bodyOfTable();

function set(){
    var store = JSON.stringify(Prefume.all);
    localStorage.setItem('Prefume', store);
};
function get(){
    var stored = localStorage.getItem('Prefume');
    Prefume.all = JSON.parse(stored);
};
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }