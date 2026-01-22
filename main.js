document.querySelector("#ChangeBack").addEventListener("click", function () {
    document.body.classList.toggle('gray-background')
})

const logo = document.querySelector('.navbar-brand');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        logo.classList.add('scrolled');
    } else {
        logo.classList.remove('scrolled');
    }
});