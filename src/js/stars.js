let rating = document.querySelectorAll('.question-answer__items-stars');
// console.log(rating);
let ratingItem = document.querySelectorAll('.rating-items');
// console.log(ratingItem);
rating.forEach(item=>{
  item.addEventListener('click',(e) => {
    // console.log(rating);
    let target = e.target;
    if(target.classList.contains('rating-items')){
      target.classList.add('active')
      for(let i = 0,len = target.length; i < len; i++) {
        if(ratingItem[i].contains('active')) {
          break;
      } else { ratingItem[i].classList.add('active');
        
      }
      target.classList.add('active');
        // alert('aaa');
    }
    
  }
})
  })