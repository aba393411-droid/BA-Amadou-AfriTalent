const themeBtn = document.getElementById("themeToggle");

if(localStorage.getItem("theme") === "dark"){
document.body.classList.add("dark-mode");
}

themeBtn.addEventListener("click",()=>{

document.body.classList.toggle("dark-mode");

if(document.body.classList.contains("dark-mode")){

localStorage.setItem("theme","dark");

}else{

localStorage.setItem("theme","light");

}

});


// NAVBAR AU SCROLL

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

if(window.scrollY > 50){

navbar.classList.add("scrolled");

}else{

navbar.classList.remove("scrolled");

}

});


// BOUTON RETOUR EN HAUT

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll",()=>{

if(window.scrollY > 300){

backToTop.style.display="block";

}else{

backToTop.style.display="none";

}

});

backToTop.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});
const counters=
document.querySelectorAll(".counter");
counters.forEach(counter=>{
    const target=
    +counter.getAttribute("data-target");
    const updateCounter =() => {
        const current =+counter .innerText;
        const increment = target/100;
        if(current<target){
            counter.innerText=Math.ceol(current + increment);
            setTimeout(updateCounter,20);
        }else{
            counter.innerText=target;
        }
    };
    updateCounter();
});