$('.count').counterUp({
    delay: 10,
    time: 3000
})



const buttonnUp = document.getElementById('myBtn')

buttonnUp.addEventListener('click', scrollUp)

function scrollUp(e) {
    document.body.scrollTop = 0;  // for safari
    document.documentElement.scrollTop = 0; // for chrome, firefox, IE...etc
}

window.addEventListener('scroll', arrowVisible)

function arrowVisible(e) {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        buttonnUp.style.display = 'block'
    }
    else {
        buttonnUp.style.display = 'none'

    }
}
