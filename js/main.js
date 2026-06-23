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

const filterButtons = document.querySelectorAll(".filter-btn");

const freelancerCards = document.querySelectorAll(".freelancer-card");

filterButtons.forEach(button => {

button.addEventListener("click", () => {

const filter = button.dataset.filter;

freelancerCards.forEach(card => {

const category = card.dataset.category;

if(filter === "all" || category === filter){

card.style.display = "block";

}else{

card.style.display = "none";

}

});

});

});
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

const target = +counter.getAttribute("data-target");

const updateCounter = () => {

const current = +counter.innerText;

const increment = target / 100;

if(current < target){

counter.innerText = Math.ceil(current + increment);

setTimeout(updateCounter,20);

}else{

counter.innerText = target;

}

};

updateCounter();

});
const form = document.getElementById("contactForm");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

const nom = document.getElementById("nom").value.trim();

const prenom = document.getElementById("prenom").value.trim();

const email = document.getElementById("email").value.trim();

const sujet = document.getElementById("sujet").value;

const message = document.getElementById("message").value.trim();

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(

nom === "" ||

prenom === "" ||

email === "" ||

sujet === "" ||

message === ""

){

alert("Tous les champs sont obligatoires.");

return;

}

if(!emailRegex.test(email)){

alert("Email invalide.");

return;

}

if(message.length < 20){

alert("Le message doit contenir au moins 20 caractères.");

return;

}

alert("Formulaire envoyé avec succès.");

form.reset();

});

}

const counters = document.querySelectorAll('.counter');

const counterObserver = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            const counter = entry.target;

            const target = +counter.getAttribute('data-target');

            let current = 0;

            const increment = target / 100;

            const updateCounter = () => {

                if(current < target){

                    current += increment;

                    counter.textContent = Math.ceil(current);

                    requestAnimationFrame(updateCounter);

                }else{

                    counter.textContent = target;

                }

            };

            updateCounter();

            observer.unobserve(counter);

        }

    });

},{
    threshold:0.5
});

counters.forEach(counter => {
    counterObserver.observe(counter);
});
const sections = document.querySelectorAll('.fade-section');

const fadeObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add('visible');

        }

    });

},{
    threshold:0.2
});

sections.forEach(section=>{

    fadeObserver.observe(section);

});