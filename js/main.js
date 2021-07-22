const navbar = document.querySelector('.navbar');

document.addEventListener('scroll', ()=> {
    const scrollTop = this.pageYOffset;
    if(scrollTop >= 50){
        navbar.classList.add('scrolled')
    } else {
        navbar.classList.remove('scrolled')
    }
})