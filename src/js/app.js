import * as flsFunctions from './modules/functions.js';
import './slider.js';
import './history-slider.js'
import './burger.js';
// import './map.js';
import './stars.js';

flsFunctions.testWebP(function (support) {
    
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
}); 
