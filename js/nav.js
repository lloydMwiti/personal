let nav=document.querySelector('nav');
let windowheight=window.innerHeight;

window.addEventListener('scroll',()=>{
    console.log(window.scrollY);
    console.log(window.innerHeight);
    scrollCheck();
})

function scrollCheck(){
if(window.scrollY >= (windowheight - 77)){
    nav.classList.add("stickynav");
}
else if(window.scrollY < (windowheight - 77)){
    nav.classList.remove("stickynav");
}
}

