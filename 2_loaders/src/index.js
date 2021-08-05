import Title from "./components/title";
import Image from "./components/image";
import Button from "./components/button";
import warning from "./templates/warning.html";
import './styles/warnig.css';
import phraseTxt from './files/phrase.txt';
import customer from './files/customer.json';

const title = new Title()
title.create("First Page!");


const image = new Image();
image.insertDogImage();

const button = new Button();
button.create();


// Babel Spread
const obj = {a: 1, b: 2, c: 3, d: 4};
let {a,b, ...teste} = obj

console.log(a);
console.log(b);
console.log(teste);


// Import  html
const body = document.querySelector('body');
body.innerHTML += warning;

// Import from file
const phrase = phraseTxt
console.log(phrase);
console.log(phrase.toUpperCase());

// Import JSON
const customerResponse = customer;
console.log(customerResponse)
