// alert("js")

// navbar//
let menu=document.querySelector('#menu-bars');
let navbar=document.querySelector('.navbar');

menu.onclick=()=>{
 menu.classList.toggle('fa-times');   //ye menu wale icon ko cross me convert kri h 
 navbar.classList.toggle('active');
}


let section=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header .navbar a');

window.onscroll=()=>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    section.forEach((sec)=>{
      let top=window.scrollY;
      let height=sec.offsetHeight;
      let offset=sec.offsetTop - 150;
      let id=sec.getAttribute('id');

     if(top>=offset && top < offset + height)
     {
        navLinks.forEach((links)=>{
         links.classList.remove('active');
         document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
         // document.getElementById('+id+').classList.add('active');
        }); 
     }; 
    });
}

// for search form
let search=document.querySelector('#search-icon');
let form=document.querySelector('#search-form');

search.onclick=()=>{
    form.classList.toggle('active');
}

document.querySelector('#close').onclick=()=>{
form.classList.remove('active');
}

//for sliding (swiper ke code me se js copy kia hai FOR --->Home Section)
var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
 loop:true,
});

//for sliding (swiper ke code me se js copy kia hai FOR --->Home Section)
var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
 loop:true,
 breakpoints:{
  0: {
    slidesPerView:1,
  },
  
  640: {
    slidesPerView:2,
  },

  768: {
    slidesPerView:2,
  },

  1024: {
    slidesPerView:3,
  },
  
 },
});

// For Loader Section

function loader(){
  document.querySelector('.loader-container').classList.add('active');
}

function hideLoader(){
   setTimeout(loader,3000);
}

hideLoader();
