const navSlide = function(){

const sidenav = document.getElementById("sidenav");
const burger = document.querySelectorAll(".burger");

burger.addEventListner('click',function(){
     sidenav.classList.toggle('sidenav-active');
});
};
navSlide();


