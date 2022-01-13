const menuBtn = document.querySelector('.menuBtn')
const nav = document.querySelector('.nav');

menuBtn.addEventListener('click', function(){
    nav.style.right == "-250px";
   if(nav.style.right == "-250px") {
       nav.style.right = "0px";
   } else { nav.style.right = "-250px";}
})