const btn=document.querySelector("#btn")
const heading=document.querySelector("h1")
btn.addEventListener("click",()=>{
   if (btn.innerHTML=="DARK") {
    btn.innerHTML="LIGHT"
    document.body.style.backgroundColor="black"
    heading.innerHTML="BLACK BACKGROUND"
    heading.style.color="white"
    btn.style.backgroundColor="white"
    btn.style.color="black"
   } else {
    btn.innerHTML="DARK"
    document.body.style.backgroundColor="white"
    heading.innerHTML="WHITE BACKGROUND"
    heading.style.color="black"
    btn.style.backgroundColor="black"
    btn.style.color="white"
   } 
    
})