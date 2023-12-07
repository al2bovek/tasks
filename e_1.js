"use strict";
let p_1 = document.querySelector('#p_1');
let i_1 = document.querySelector('#i_1');
i_1.addEventListener('blur', () => p_1.textContent += i_1.value);