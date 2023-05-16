// let circle = document.getElementById('circle')
let star = document.getElementById('star')
let mt_l = document.getElementById('mt_l')
let mt_r = document.getElementById('mt_r')
let mt_mid = document.getElementById('mt_mid')
// let tree_mid = document.getElementById('tree_mid')
let mt_fr = document.getElementById('mt_fr')
let treeLFR = document.getElementById('treeLFR')
let treeLMID = document.getElementById('treeLMID')
let treeLBH = document.getElementById('treeLBH')
let treeRBH = document.getElementById('treeRBH')
let treeRMID = document.getElementById('treeRMID')
let treeRFR = document.getElementById('treeRFR')
let title = document.getElementById('title')

window.addEventListener('scroll', () =>{
    let value = window.scrollY;
    // circle.style.marginTop = value * -0.5 +"px";
    star.style.marginTop = value * -0.5 +"px";
    mt_l.style.marginLeft = value * -0.5 +"px";
    mt_r.style.marginLeft = value * 0.5 +"px";
    mt_mid.style.marginLeft = value * -0.5 +"px";
    // tree_mid.style.marginTop = value * 0.5 +"px";
    mt_fr.style.marginLeft = value * 0.5 +"px";
    treeLFR.style.marginLeft = value * -0.2 +"px";
    treeLMID.style.marginLeft = value * -0.5 +"px";
    treeLBH.style.marginLeft = value * -0.5 +"px";
    treeRBH.style.marginLeft = value * 0.5 +"px";
    treeRMID.style.marginLeft = value * 0.5 +"px";
    treeRFR.style.marginLeft = value * 0.2 +"px";
    title.style.marginTop = value * 0.6 +"px";

})

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))