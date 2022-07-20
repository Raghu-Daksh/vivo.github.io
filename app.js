

window.addEventListener('scroll' , function(){
   var header = document.querySelector('nav');
   header.classList.toggle('sticky', window.scrollY > 0) ;
    
})

let hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links ');
const lists = document.querySelectorAll('.nav-links li');
const toggleHamburger = document.querySelectorAll('.hamburger .line');


hamburger.addEventListener('click', ()=>{
 
   navLinks.classList.toggle('sidebar');
   lists.forEach(list=>{
      list.classList.toggle('fade');
   })
   toggleHamburger.forEach(line=>{
      line.classList.toggle('cross');
   })

})