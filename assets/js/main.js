'use strict'

let menuElems = document.querySelectorAll('.menu-elem');

menuElems.forEach(menuElem => {
    let submenu = menuElem.querySelector('.submenu');
    let btn = menuElem.querySelector('.menu-btn');

    menuElem.addEventListener('mouseenter', function(){
        submenu.classList.add('active')
        btn.classList.add('active')
    })

    menuElem.addEventListener('mouseleave', function(){
        submenu.classList.remove('active')
        btn.classList.remove('active')
    })
})


let sliderBody = document.querySelector('.our-slider-block');
let sliderNav = document.querySelector('.slider-nav');
let sliderImages = document.querySelector('.slider-images');
let sliderItems = Array.from(document.querySelectorAll('.slider-item'));
let sliderDots = Array.from(document.querySelectorAll('.slider-dot'));

sliderBody.addEventListener('click', function(event){
    let targetArrow = event.target.closest('.slider-arrow');
    if(!targetArrow) return;

    let currentActiveImage = document.querySelector('.slider-item.active');
    let currentActiveIndex = sliderItems.indexOf(currentActiveImage);

    currentActiveImage.classList.remove('active');
    document.querySelector('.slider-dot.active').classList.remove('active');

    changeActive(targetArrow, currentActiveIndex);

    let newActiveImage = document.querySelector('.slider-item.active');
    let newActiveIndex = sliderItems.indexOf(newActiveImage);

    scrollSlider(newActiveIndex);
})
function scrollSlider(index){
    sliderImages.style.transform = `translateX(${-100*index}%)`
}
function changeActive(arrow, currentIndex){
    if(arrow.classList.contains('left')){
        if(currentIndex == 0){
            sliderItems.at(-1).classList.add('active');
            sliderDots.at(-1).classList.add('active');
        }else{
            sliderItems[currentIndex-1].classList.add('active');
            sliderDots[currentIndex-1].classList.add('active');
        }
    }else{
        if(currentIndex == sliderItems.length - 1){
            sliderItems[0].classList.add('active');
            sliderDots[0].classList.add('active');
        }else{
            sliderItems[currentIndex+1].classList.add('active');
            sliderDots[currentIndex+1].classList.add('active');
        }
    }
}

sliderNav.addEventListener('click', function(event){
    let targetDot = event.target.closest('.slider-dot');
    if(!targetDot) return;

    if(targetDot.classList.contains('active')) return;

    document.querySelector('.slider-dot.active').classList.remove('active');
    targetDot.classList.add('active');
    document.querySelector('.slider-item.active').classList.remove('active');

    sliderItems[targetDot.dataset.index].classList.add('active');
    scrollSlider(targetDot.dataset.index);
})

let tabBtns = document.querySelectorAll('.tab-btn')
let tabTexts = document.querySelectorAll('.tabs-item')

tabBtns.forEach((item, index)=>{
    item.addEventListener('click', function(){
        document.querySelector('.tab-btn.active').classList.remove('active');
        item.classList.add('active');

        document.querySelector('.tabs-item.active').classList.remove('active');
        tabTexts[index].classList.add('active')
    })
})

document.querySelector('.faq').addEventListener('click', function(event){
    let target = event.target.closest('.faq-item');
    if(!target) return;

    target.classList.toggle('active');
    let p = target.querySelector('p');
    if(target.classList.contains('active')){
        p.style.height = p.scrollHeight + 'px';
    }else{
        p.style.height = '';
    }
})

let phone = document.querySelector(".phone");
let catalog = document.querySelector(".faq");

let observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        phone.classList.add("show");
      } else {
        phone.classList.remove("show");
      }
    });
  },
  {
    threshold: 0.5,
  }
);
observer.observe(catalog);


var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
window.onload = function () {
  setTimeout(function () {
    modal.style.display = "block";
  }, 3000);
};
span.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};