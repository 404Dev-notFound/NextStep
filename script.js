// MOBILE MENU

import Aurora from './Aurora';
  
<Aurora
  colorStops={["#561c24","#e8d8c4","#6d2932"]}
  blend={0.64}
  amplitude={1.0}
  speed={1}
/>

const hamburger=document.getElementById("hamburger")
const navLinks=document.getElementById("navLinks")

hamburger.addEventListener("click",()=>{

navLinks.classList.toggle("active")

})



// SMOOTH SCROLL

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault()

document.querySelector(this.getAttribute("href"))
.scrollIntoView({
behavior:"smooth"
})

})

})



// FADE IN ON SCROLL

const cards=document.querySelectorAll(".feature-card")

window.addEventListener("scroll",()=>{

cards.forEach(card=>{

const top=card.getBoundingClientRect().top

if(top<window.innerHeight-100){

card.style.opacity=1
card.style.transform="translateY(0)"

}

})

})