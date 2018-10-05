$(document).foundation()

//variables

var lightbox = document.querySelector('.lightbox');
var closeLightB = document.querySelector('.closeLightbox');
var galleryThumb = document.querySelectorAll('.casestudy');
var mainphoto = document.querySelector('#portfolioImage');
var imageDesc = document.querySelector('#imageDesc');
var count = 0;

//functions

function openLBox(){
    lightbox.classList.add('show-lightbox');
}

function closeLbox(){
    lightbox.classList.remove('show-lightbox');
}

function showPortfolioImage(){
    mainphoto.src = this.querySelector('img').src.replace('/img','');
    imageDesc.innerHTML = this.querySelector('.projectDesc').innerHTML;
    lightbox.classList.add('show-lightbox');
}

//event listeners

for(var i = 0; i < galleryThumb.length; i++) {
    galleryThumb[i].addEventListener('click', showPortfolioImage, false);
}

closeLightB.addEventListener('click', closeLbox, false);