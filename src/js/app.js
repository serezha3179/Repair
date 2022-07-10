import * as flsFunctions from './modules/functions.js';

flsFunctions.testWebP(function (support) {
    
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
}); 


document.querySelector('.block').addEventListener('click', function() {document.querySelector('.block').classList.toggle('aaaaa')});
 
// alert()