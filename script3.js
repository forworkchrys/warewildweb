let light_1 = document.getElementById('light_1')
let light_2 = document.getElementById('light_2')
let front_right = document.getElementById('front_right')
let front_left = document.getElementById('front_left')
let mos = document.getElementById('mos')
let branch = document.getElementById('branch')
let title = document.getElementById('title')
let circle = document.getElementById('circle')


window.addEventListener('scroll', () =>{
    let value = window.scrollY;
    light_1.style.marginTop = value * -0.7 +"px";
    light_2.style.marginTop = value * 0.5 +"px";
    front_right.style.marginLeft = value * 0.9 +"px";
    front_left.style.marginLeft = value * -0.9 +"px";
    mos.style.marginLeft = value * 0.4 +"px";
    branch.style.marginLeft = value * 0.5 +"px";
    title.style.marginTop = value * -0.5 +"px";
    circle.style.marginTop = value * -0.5 +"px";

})

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))