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


    const videoBtn = document.querySelector('.story__video-svg')
    const videoObj = document.querySelector('.story__video-obj')
    const overlay = document.querySelector('.story__video-overlay')

    videoBtn.addEventListener('click', () => {

        function toggleOverlay(event) {
            if (event.type === 'mouseleave') {
                overlay.classList.add('hidden');
            } else {
                overlay.classList.remove('hidden');
            }
        }

        if (videoObj.paused) {
            videoObj.play()
            videoBtn.innerHTML = `<svg class="story__video-svg">
                                <use xlink:href="#pause-white"></use>
                            </svg>`

            overlay.onmouseleave = toggleOverlay
            overlay.onmouseenter = toggleOverlay
        } else {
            videoObj.pause()
            videoBtn.innerHTML = `<svg class="story__video-svg">
                                <use id="svg" xlink:href="#play-white"></use>
                            </svg>`

            overlay.onmouseleave = null
            overlay.onmouseleave = null
        }
    })
})
