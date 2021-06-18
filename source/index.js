import hello_word from './hello.js';
import world_word from './world.js';
import _ from "lodash"; // node_moduels에서 가져옴.
import css from './style.css';

document.querySelector("#root").innerHTML = _.join([hello_word + world_word], ' ');
console.log(css, ':css');