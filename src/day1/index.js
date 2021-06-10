console.log('index.js')
import _ from 'lodash';
import './style.css';
import Icon from './icon.svg';

function component() {
  const element = document.createElement('div');
  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack', '강부장~!'], ' ');
  element.classList.add('hello');
  const myIcon = new Image();
  myIcon.src = Icon;
  
  element.appendChild(myIcon);
  return element;
}

document.body.appendChild(component());
