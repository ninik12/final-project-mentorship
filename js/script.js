const burgerMenu = document.querySelector('.burger-menu');
const navigation = document.getElementById('nav_menu')

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active')
    navigation.classList.toggle('activeNav')
})