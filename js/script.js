const menuHamburger = document.querySelector(".menu");
const navbarre = document.querySelector(".nav-barre nav")
const navBarre = document.querySelector(".nav-barre ")
menuHamburger.addEventListener('click',()=>{
navbarre.classList.toggle('mobilmenu')
navBarre.classList.toggle('mobilmenu')
})

/*(function($){
  $(document).ready(function(){
      var offset = $(".nav-barre").offset().top;
      $(document).scroll(function(){
          var scrollTop = $(document).scrollTop();
          if(scrollTop > offset){
              $(".nav-barre").css("position", "fixed");
          }
          else {
              $(".nav-barre").css("position", "static");
          }
      });
  });
})(jQuery);*/

const slide = ["img/el1.jpg", "img/el2.jpg", "img/el3.jpg","img/el4.jpg","img/el5.jpg","img/el6.jpg"];
let numero = 0;
function ChangeSlide(sens) { 
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1; 
    if (numero > slide.length - 1) 
        numero = 0;
    document.getElementById("slide").src = slide[numero]; 
}
setInterval("ChangeSlide(1)", 10000);

const navibarre = document.querySelector(".nav-barre")
window.addEventListener('scroll', ()=>{

if (window.scrollY > 149) {
navibarre.classList.add('navibarre')
}
else{
navibarre.classList.remove('navibarre')
}
});