let mt = document.getElementById('mt')
let middle =document.getElementById("middle")
let treeleftmd =document.getElementById("treeleftmd")
let treerightmd =document.getElementById("treerightmd")
let treeleftfr =document.getElementById("treeleftfr")
let treerightfr =document.getElementById("treerightfr")
let leftfr =document.getElementById("leftfr")
let rightfr =document.getElementById("rightfr")
let rightab =document.getElementById("rightab")
let leftab =document.getElementById("leftab")
let bug =document.getElementById("bug")
let leaf1 =document.querySelector(".feature .leaf1")
let leaf2 =document.querySelector(".feature .leaf2")


window.addEventListener('scroll', () =>{
    let value = window.scrollY;
    mt.style.marginTop = value * 0.75 +"px";
    treeleftmd.style.marginLeft = value * -0.5 +"px";
    treerightmd.style.marginLeft = value * 0.5 +"px";
    middle.style.marginTop = value * 0.5 +"px";
    treeleftfr.style.marginLeft = value * -0.99 +"px";
    treerightfr.style.marginLeft = value * 0.99 +"px";
    leftfr.style.marginLeft = value * -0.15 +"px";
    rightfr.style.marginLeft = value * 0.20 +"px";
    bug.style.marginLeft = value * 0.15 +"px";
    leftab.style.marginLeft = value * -0.99 +"px";
    rightab.style.marginLeft = value * 0.99 +"px";
    leaf1.style.marginTop = value * 0.4 +"px";
    leaf2.style.marginTop = value * -0.4 +"px";
})