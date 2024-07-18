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
 
});
i.addEventListener("dblclick",()=>{
    document.querySelector(".dropdown2").style.display="none";
});
let scrollBar = document.querySelector(".gallery");
let backBtn= document.getElementById("backbtn");
let nextBtn = document.getElementById("nextbtn");
scrollBar.addEventListener("wheel",(evt)=>{
    evt.preventDefault();
    scrollBar.scrollLeft += evt.deltaY;
});
nextBtn.addEventListener("click",()=>{
    scrollBar.scrollLeft += 900;
    console.log("clicked");
});
backBtn.addEventListener("click",()=>{
    scrollBar.scrollLeft -= 900;
    console.log("clicked");
});