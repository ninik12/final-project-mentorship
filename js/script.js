// burger bar
const burgerMenu = document.querySelector('.burger-menu');
const navigation = document.getElementById('nav_menu')

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active')
    navigation.classList.toggle('activeNav')
});


// scroll to top button
const btn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", function(){
    if(this.window.scrollY > 100){
        btn.style.display = "block";
    } else {
        btn.style.display = "none"
    }
});

btn.addEventListener("click", function(){
    window.scrollTo({ top: 0, behavior: "smooth"})
});
