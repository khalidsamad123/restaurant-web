let icone = document.querySelector(".icone");
let  ul   = document.querySelector("ul");
let landing =document.querySelector(".landing");

icone.addEventListener("click",()=>{
    ul.classList.toggle("showdata")
     

    if(ul.className== "showdata"){
        document.getElementById("bar").className="fa-solid fa-xmark"
    }
   else{
    document.getElementById("bar").className="fa-solid fa-bars-staggered"
   }
})
icone.onclick = function(){
    if (landing.style.display == 'none') {
        landing.style.display='block'
        
    } else {
        landing.style.display='none'
    }
}











