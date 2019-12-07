//import '../assets/css/style.css';
// Nedelja 1
// Nedelja 1, dan 1.
/** Danas smo presli osnove osnova HTML-a, css-a i JS-a.
 * Sledeci kod nam ispisuje poruku kao i u veb stranicu ubacuje neki element.
 */
console.log('Hello by js!');
console.log('Hello World!');
const app = document.getElementById('app');
console.log(app);

app.innerHTML = '<p>Hello to Bootcamp pizza from JavaScript!</p>';
const social = document.getElementById('social');

const facebookUrl = 'https://facebook.com';
const youtubeUrl = 'https://youtube.com';
const instagramUrl = 'https://instagram.com';
const twitterUrl = 'https://twitter.com';

var facebookIcoPath = 'assets/images/fb_ico.png';
var youtubeIcoPath = 'assets/images/youtube_ico.png';
var twitterIcoPath = 'assets/images/twitter_ico.png';
var instagramIcoPath = 'assets/images/instagram_ico.png';

social.innerHTML =
    `<a href="${facebookUrl}" target="_blank"><img class="social-icon" src="${facebookIcoPath}" /></a>`;

social.innerHTML +=
    `<a href="${youtubeUrl}" target="_blank"><img class="social-icon" src="${youtubeIcoPath}" /></a>`;

social.innerHTML +=
    `<a href="${twitterUrl}" target="_blank"><img class="social-icon" src="${twitterIcoPath}" /></a>`;

social.innerHTML +=
    `<a href="${instagramUrl}" target="_blank"><img class="social-icon" src="${instagramIcoPath}" /></a>`;



// Dodati ikonice za Twitter i Instagram

// *************************************************** 

// Nedelja 1
// Dan 4

{
    console.log("Dobar dan");


    var variable = 'Dobar dan iz varijable';
    console.log(variable);
    var variable2 = ' Dodatak poruke';
    console.log(variable + variable2);
    var number1 = 5;
    var number2 = 0;
    var numebr3 = number1 / number2;
    console.log('To ' + numebr3 + ' and beyond!');
    number1 = 15;
    number2 = 10;
    numebr3 = 2;

    console.log(variable + (number1 + number2) * numebr3);

    const constant = 5;

    console.log(constant);

    // constant = 6; // Ne moze!
}

//console.log(constant); // Ne moze!


/*{
    var a = 12;
    let b = 5;
    console.log(a);
    console.log(b);
}
console.log(a);
// Ako imamo let spolja onda je naredna linija okej u usprotnom nije okej!
//console.log(b);

// s1
{
    let b;
    b = 15;
    console.log(b);

    // s2
    {
        let b;
        b = 99;
        console.log(b);
        let c;
        console.log(c);
        c = 8;

        // s3
        {
            let d = 9;
            d = 21;
            console.log(d);
        }
        let d;
        console.log(d);
    }
}
// var b;
// console.log(b);
*/

{
    let a = 1;
    console.log(a);

    {
        var c = 3;
        let d = 4;
        a = 2;
        console.log(a);
        console.log(c);
        console.log(d);
        console.log(e);
        // console.log(f); Ne moze jer f nije definisano u ovom scope-u
    } {
        var e = 5;
        let f = 6;
        a = 6;
        c = 7;
        // d = 8; // Ne moze jer je d lokalna promenljiva za drugi scope
        console.log(a);
        console.log(c);
        // console.log(d); // Ne moze jer d nije definisano u ovom scope-u
        console.log(e);
        console.log(f);
    }
    a = 8;
    c = 9;
    // d = 10; // Ne moze jer d nije definisano u ovom scope-u
    e = 11;
    // f = 12; // Ne moze jer d nije definisano u ovom scope-u
    console.log(a);
    console.log(c);
    // console.log(d); // Ne moze jer d nije definisano u ovom scope-u
    console.log(e);
    // console.log(f); // Ne moze jer f nije definisano u ovom scope-u
}

/* let a;
let someVariable;
let a1;
// let 1a;
let _a;
// let let
let _1a;
let _;
// let ab*;
// let *ab;
*/


var name = 'Bootcamp Pizza';
var street = 'Bulevar kralja Aleksandra';
var streetNumber = 73;
var postalCode = 11000;
var city = 'Belgrade';
var country = 'Republic of Serbia';
var phoneNumber = '+381(0)64-12-34-567';

const storeNameContainer = document.getElementById("store-name");
storeNameContainer.innerHTML = name;

const storeAddressContainer = document.getElementById("store-address");
storeAddressContainer.innerHTML = `<p>${street} ${streetNumber}, ${postalCode} ${city}<br /> ${country} </p>Phone: ${phoneNumber}`;

var radius = 16;

// var pizzaSurface = radius * radius * 3.14;
// var pizzaSurface = radius * radius * Math.PI;
var pizzaSurface = Math.pow(radius, 2) * Math.PI;
console.log(2 ** 5);
console.log(`Pizza surface is ${Math.round(pizzaSurface)} cm2.`);

// var r = 4;
// var sliceNumber = 6;
// var koricaLength = 2 * r * Math.PI / sliceNumber;

// Givent the sliceNumber and radius, calculate the slice length

/*
let depoVelikih = 10;
let depoMalih = 20;
{
    let kolmalih = 3;
    let kolVelikih = 2;
    let ukupnoKauc = kolmalih * depoMalih +kolVelikih *depoVelikih;
    console.log('Ukupno za kauciju ' + ukupnoKauc);
}
*/
//**************************************************** */
// Date and Time

// PAZNJA _ KORISTICEMO KASNIJE!!!
{
    let DateTimeNow = new Date();
    console.log(DateTimeNow);

    let hours = DateTimeNow.getHours();
    let minutes = DateTimeNow.getMinutes();
    let seconds = DateTimeNow.getSeconds();
    let timeStampString = `${hours}:${minutes}:${seconds}`;
    console.log(timeStampString);
    // Za danasnji datum
    console.log(DateTimeNow.getDay());

    // Postavicemo datum na neki dan koji je nedelja 
    // DateTimeNow.setDate(27);
    // console.log(DateTimeNow.getDay());

    // Write date and time in the following format 

    let year = DateTimeNow.getFullYear();
    let month = DateTimeNow.getMonth();
    let dayInMonth = DateTimeNow.getDate();
    console.log(`[{${dayInMonth}-${month + 1}-${year}}-${timeStampString}]`);

    let totalSeconds = hours * 3600 + minutes * 60 + seconds;
    // let totalSeconds = (hours * 60 + minutes) * 60 + seconds;
    console.log(`Total number of seconds today is ${totalSeconds}`);

}

{
    let b;
    b = 4;
    if (b > 3) {
        console.log(`${b} je vece od 3`);
    }

    // Napisati programcic koji proverava da li je b paran ili neparan broj.
    if (!(b & 1)) {
        console.log(`${b} je paran broj.`);
    } else {
        console.log(`${b} je neparan broj.`);
    }
}
{
let discountDay = 2; // Tuesday
let DateTimeNow = new Date();
let dayInWeek = DateTimeNow.getDay();
let capricciosa = 120;
let pizzaCount = 5;
let discountSize = 0.1; // 10%
let finalPrice = capricciosa * pizzaCount;

if (dayInWeek === discountDay) {
    finalPrice *= (1 - discountSize);
}

console.log(`Price for ${pizzaCount} pizzas is ${finalPrice}`);


{
    let hours = DateTimeNow.getHours();
    let minutes = DateTimeNow.getMinutes();
    let seconds = DateTimeNow.getSeconds();
    let timeStampString = `${hours}:${(minutes > 10) ? minutes : ('0' + minutes)}:${(seconds > 10) ? seconds : ('0' + seconds)}`;
    let year = DateTimeNow.getFullYear();
    let month = DateTimeNow.getMonth();
    let dayInMonth = DateTimeNow.getDate();

    let dayInWeekString;
    let monthString;
    switch (dayInWeek) {
        case 0:
            dayInWeekString = 'Sunday';
            break;
        case 1:
            dayInWeekString = 'Monday';
            break;
        case 2:
            dayInWeekString = 'Tuesday';
            break;
        case 3:
            dayInWeekString = 'Wednesday';
            break;
        case 4:
            dayInWeekString = 'Thursday';
            break;
        case 5:
            dayInWeekString = 'Friday';
            break;
        case 6:
            dayInWeekString = 'Saturday';
            break;
        default:
            console.error(`Unknown day ${dayInWeek}`);
            dayInWeekString = "ERROR";
            break;
    }

    // Napisati kod koji vraca naziv meseca u obliku stringa.
    // Meseci pocinju od 0 to jest januar je 0.
    switch (month) {
        case 0:
            monthString = "January";
            break;
        case 1:
            monthString = "February";
            break;
        case 2:
            monthString = "March";
            break;
        case 3:
            monthString = "April";
            break;
        case 4:
            monthString = "May";
            break;
        case 5:
            monthString = "June";
            break;
        case 6:
            monthString = "July";
            break;
        case 7:
            monthString = "August";
            break;
        case 8:
            monthString = "September";
            break;
        case 9:
            monthString = "October";
            break;
        case 10:
            monthString = "November";
            break;
        case 11:
            monthString = "December";
            break;
        default:
            console.error(`Unknown month ${month}`);
            monthString = "ERROR";
            break;
    }

    app.innerHTML = `<p>Today is ${dayInWeekString}, ${dayInMonth} of ${monthString} ${year}. Current time <span id="currentTime">${timeStampString}</span></p>`;
}
}
function helloWorld() {
    console.log('Hello World!');
}

console.log('Pre poziva funckije!');
helloWorld();
console.log('Posle poziva funkcije!');

// let message = 15;
// console.log(message);
function logMessage(message) {
    console.log(`${message}`);
}

{
    let poruka ="Danas je suncan dan!";
    logMessage(poruka);
    logMessage('Batman!');
    logMessage();
}
function add(a, b) {
    return a + b;
}

console.log(add(5, 2));
// console.log(helloWorld);
// Napisati funkciju koja na osnovu poslatog dana u nedelji kao broj vraca recima koji je dan u nedelji
{
    function getDayOfWeek(dayInWeek) {
        switch (dayInWeek) {
            case 0:
                return 'Sunday';
            case 1:
                return 'Monday';
            case 2:
                return 'Tuesday';
            case 3:
                return 'Wednesday';
            case 4:
                return 'Thursday';
            case 5:
                return 'Friday';
            case 6:
                return 'Saturday';
            default:
                return "ERROR";
        }
    }

    function isEven(number) {
        if(number % 2 == 0) return true;
        else return false;
    }
    console.log(getDayOfWeek(0));
    console.log(isEven(5)?'Even':'Odd');
}

function logMessageTimeStamp(message) {
    let now = new Date();
    console.log(`${getTimeFormat(now)} ${message}`);
}

function getTimeFormat(time) {
    return `[${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}]`;
}

logMessageTimeStamp('Pauza pls!');



{
    let array = new Array();
    array.push(10);
    console.log(array);
    array.push('abc');
    console.log(array);
    array.unshift('start');
    console.log(array);
    array[0] = 'Dobar dan';
    console.log(array);
    let nizB = [1, 2, 3];
    console.log(nizB);
    // array.push(nizB);
    let nizC = array.concat(nizB);
    console.log(nizC);
    console.log(nizC.length);
    for(let i = 0; i < nizC.length; i++) {
        logMessageTimeStamp(nizC[i]);
    }
    
}


const orderBtnClassName = '.order-btn';
let orderButtons = document.querySelectorAll(orderBtnClassName);

console.log(orderButtons);
// for(let button in orderButtons) {
//     console.log(button);
// } // NE


let cart = document.querySelector('#cart');

const cartPop = document.querySelector('#cart-pop');

cartPop.style.display = 'none';
let isCartVisible = false;
var pizzaCount = 0;
const pizzaCounterBadge = document.querySelector('#counter');



function changeCartPopDisplay() {
    // cartPop.style.display = isCartVisible ? 'none' : 'block';
    if(isCartVisible) {
        cartPop.style.display = 'none';
        // cart.style.backgroundColor = '#FFF';
    } else {
        cartPop.style.display = 'block';
        // cart.style.backgroundColor = '#FFFF00';
    }
    isCartVisible = !isCartVisible;
}

cart.addEventListener('click', changeCartPopDisplay);

// let nesto = document.querySelector('#abc');
// let podatak = nesto.getAttribute('value');
// console.log(podatak);

// let object = document.querySelector('#abc');
// object.addEventListener('change', function() { changeMe(object) });
// function changeMe(element) {
//     let paragraph = document.querySelector('#par');
//     paragraph.innerHTML = element.getAttribute('value');
// }

// for(let button of orderButtons) {
//     button.addEventListener('click', function() {
//         selectPizza(button);
//     });
// }
orderButtons.forEach(button => {
    button.addEventListener('click', function() {
        selectPizza(button);
    });
})
// Zapamtiti
function selectPizza(element) {
    console.log(element);
    pizzaCount++;
    pizzaCounterBadge.innerHTML = pizzaCount;
}