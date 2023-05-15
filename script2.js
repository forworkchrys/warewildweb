let pill = document.getElementById('pill')
let bandage = document.getElementById('bandage')
let flower_l = document.getElementById('flower_l')
let flower_r = document.getElementById('flower_r')
let cotton = document.getElementById('cotton')
let plaster = document.getElementById('plaster')
let mainname = document.getElementById('mainname')
let add = document.getElementById('add')
let move=0;

window.addEventListener('scroll', () =>{
    let value = window.scrollY;
    pill.style.marginTop = value * 0.5 +"px";
    bandage.style.marginTop = value * 0.2 +"px";
    flower_l.style.marginTop = value * -0.5 +"px";
    flower_r.style.marginTop = value * -0.5 +"px";
    cotton.style.marginTop = value * -0.5 +"px";
    plaster.style.marginTop = value * -0.5 +"px";
    mainname.style.marginTop = value * -1 +"px";
})

var btn_1 = document.getElementById("btn_1");
var btn_2 = document.getElementById("btn_2");
var btn_3 = document.getElementById("btn_3");
var btn_4 = document.getElementById("btn_4");
var btn_5 = document.getElementById("btn_5");
var myImage = document.getElementById("myImage");
var myImage2 = document.getElementById("myImage2");
var myImage3 = document.getElementById("myImage3");
var myImage4 = document.getElementById("myImage4");
var myImage5 = document.getElementById("myImage5");
btn_1.addEventListener('click', ()=>{
    myImage.style.display='block';
    myImage2.style.display='none';
    myImage3.style.display='none';
    myImage4.style.display='none';
    myImage5.style.display='none';

});
btn_2.addEventListener('click', ()=>{
    myImage.style.display='none';
    myImage2.style.display='block';
    myImage3.style.display='none';
    myImage4.style.display='none';
    myImage5.style.display='none';

});
btn_3.addEventListener('click', ()=>{
    myImage.style.display='none';
    myImage2.style.display='none';
    myImage3.style.display='block';
    myImage4.style.display='none';
    myImage5.style.display='none';

});
btn_4.addEventListener('click', ()=>{
    myImage.style.display='none';
    myImage2.style.display='none';
    myImage3.style.display='none';
    myImage4.style.display='block';
    myImage5.style.display='none';

});
btn_5.addEventListener('click', ()=>{
    myImage.style.display='none';
    myImage2.style.display='none';
    myImage3.style.display='none';
    myImage4.style.display='none';
    myImage5.style.display='block';

});
