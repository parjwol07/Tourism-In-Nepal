let lang= document.querySelector(".lang-menu");
let i = document.querySelector("i");
lang.addEventListener("click",()=>{
    document.querySelector(".dropdown").style.display="block";
 
})
lang.addEventListener("dblclick",()=>{
    document.querySelector(".dropdown").style.display="none";
})
i.addEventListener("click",()=>{
    document.querySelector(".dropdown2").style.display="block";
 
})
i.addEventListener("dblclick",()=>{
    document.querySelector(".dropdown2").style.display="none";
})