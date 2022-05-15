var btn=document.querySelector('.btn');
var btnBall=document.querySelector('.btn-ball');
var body=document.getElementsByTagName('body');
var socialMedia=document.querySelectorAll('.social-media-box');
var overviewBox=document.querySelectorAll('.overview-box');

btn.addEventListener('click',function(){
    btn.classList.toggle('btn--active');
    btnBall.classList.toggle('btn-ball--active');
    body[0].classList.toggle('active');
    socialMedia.forEach(function(sm){
        sm.classList.toggle('social-media-box--active');
    });
    overviewBox.forEach(function(ob){
        ob.classList.toggle('overview-box--active');
    });
});