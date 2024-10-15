// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

// Horizontal scroll effect for images inside sticky section

window.addEventListener('scroll', (e) => {
  for(let i = 0; i < stickySections.length; i++){
    transform(stickySections[i]);
  }
});

function transform(section){
  const offsetTop = section.parentElement.offsetTop;
  const scrollSection = section.querySelector('.scroll_section');
  let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;
  percentage = percentage < 0 ? 0 : percentage > 400 ? 400 : percentage;
  scrollSection.style.transform = `translate3d(${-(percentage)}vw, 0, 0)`;
}

// Slider animation
let images = [...document.querySelectorAll('.img')];
let slider = document.querySelector('.slider');
let sliderWidth;
let imageWidth;
let current = 0;
let target = 0;
let ease = .05;

images.forEach((img, idx) => {
    img.style.backgroundImage = `url(/Content/Images/${idx + 1}.jpeg)`;
  });
  
function lerp(start, end, t) {
  return start * (1 - t) + end * t;
}

function setTransform(el, transform) {
  el.style.transform = transform;
}

function init() {
  sliderWidth = slider.getBoundingClientRect().width;
  imageWidth = sliderWidth / images.length;
  document.body.style.height = `${sliderWidth - (window.innerWidth - window.innerHeight)}px`;
}

function animate() {
  current = parseFloat(lerp(current, target, ease)).toFixed(2);
  target = window.scrollY;
  setTransform(slider, `translateX(-${current}px)`);
  animateImages();
  requestAnimationFrame(animate);
}

function animateImages() {
  let ratio = current / imageWidth;
  let intersectionRatioValue;

  images.forEach((image, idx) => {
    intersectionRatioValue = ratio - (idx * 0.7);
    setTransform(image, `translateX(${intersectionRatioValue * 70}px)`);
  });
}

init();
animate();
