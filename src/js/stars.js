let ratings = document.querySelectorAll(".stars__items-stars");
// let ratingItem = document.querySelectorAll(".rating-items");
ratings.forEach(item=>{
let rating = item;
 let ratingItem = rating.querySelectorAll('.rating-items');
 rating.onclick = function(e){
   var target = e.target;
   if(target.classList.contains('rating-items')){
     removeClass(ratingItem,'current-active')
     target.classList.add('active','current-active');
   }
 }
 
 rating.onmouseover = function(e) {
   var target = e.target;
   if(target.classList.contains('rating-items')){
     removeClass(ratingItem,'active')
     target.classList.add('active');
     mouseOverActiveClass(ratingItem)
   }
 }
 rating.onmouseout = function(){
   addClass(ratingItem,'active');
   mouseOutActiveClas(ratingItem);
 }
 
 function removeClass(arr) {
   for(var i = 0, iLen = arr.length; i <iLen; i ++) {
     for(var j = 1; j < arguments.length; j ++) {
       ratingItem[i].classList.remove(arguments[j]);
     }
   }
 }
 function addClass(arr) {
   for(var i = 0, iLen = arr.length; i <iLen; i ++) {
     for(var j = 1; j < arguments.length; j ++) {
       ratingItem[i].classList.add(arguments[j]);
     }
   }
 }
 
 function mouseOverActiveClass(arr){
   for(var i = 0, iLen = arr.length; i < iLen; i++) {
     if(arr[i].classList.contains('active')){
       break;
     }else {
       arr[i].classList.add('active');
     }
   }
 }
 
 function mouseOutActiveClas(arr){
   for(var i = arr.length-1; i >=1; i--) {
     if(arr[i].classList.contains('current-active')){
       break;
     }else {
       arr[i].classList.remove('active');
     }
   }
 }
   
   
   })
