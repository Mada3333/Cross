'use strict';

const hbgBtn = document.querySelector('.c-hbg__btn');
const hbg = document.querySelector('.p-hbg');
const hbgLink = document.querySelectorAll('.p-hbg__link');

hbgBtn.addEventListener('click', function() {
    hbg.classList.toggle('is-active');
    console.log('ok');
});


hbgLink.forEach(function(i){
    i.addEventListener('click', function(){
        hbg.classList.remove('is-active');
    });
});
