let toggleButton = document.getElementById("toggle-mode");
let toggleMButton = document.getElementById("toggle-mode-m");
let body = document.getElementById('body')
let menu = document.querySelectorAll('.menu')
let close = document.querySelectorAll('.close')
let mobileMenu = document.querySelector('.mobile-menu')

toggleButton.addEventListener('click', (e) => {
    if(!toggleButton.checked) {
        body.classList.add('dark');
    } else {
        body.classList.remove('dark');
    }
})

toggleMButton.addEventListener('click', (e) => {
    if(!toggleMButton.checked) {
        body.classList.add('dark');
    } else {
        body.classList.remove('dark');
    }
})

menu.forEach((item) => {
    item.addEventListener('click', () => {
        mobileMenu.style.right = '0px'
    })
})

close.forEach((item) => {
    item.addEventListener('click', () => {
        mobileMenu.style.right = '-500px'
    })
})