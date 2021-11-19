// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

document.addEventListener('DOMContentLoaded', () => {
    const mobileButton = document.querySelector('.mobile__button')
    const mobileNavIcon = document.querySelector('.mobile__button-icon')
    const mobileOver = document.querySelector('.mobile__overlay')

    mobileButton.addEventListener('click', () => {
        mobileNavIcon.classList.toggle('active')
        mobileOver.classList.toggle('active')
        document.body.classList.toggle('no-scroll')
    })
})
