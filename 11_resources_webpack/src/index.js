// import _ from 'lodash';
import {message, custom} from "./message";
import $ from 'jquery';
import {lazy} from "./lazy";

console.log(_.difference([1, 2, 3], [2, 4, 5]));
console.log(_.lastIndexOf([1, 0, 2, 3, 8, 9], 3));

if (module.hot) {
    module.hot.accept('./message.js', () => {
        console.log('Update Module!!!');
        message.apply();
        message()
        custom('hello my Custom message');
    });
}

const body = $('body');

function createButton () {
    const btn = document.createElement('button');
    btn.innerText = 'Click'

    document.querySelector('body').appendChild(btn);

    btn.onclick = e => import('./lazy').then(module => {
        const lazy = module.default;
        lazy();
    })
}

createButton();
