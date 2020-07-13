const navSlide = () => {
    const burger = document.querySelector('.burger')
    const nav = document.querySelector('.nav-item')

    const navLinks = document.querySelectorAll('.nav-item ul li')

    // toggle nav
    const toggleNav = () => {
        // Toggle nav
        nav.classList.toggle('nav-active')

        // animate burger
        burger.classList.toggle('toggle');

        // animate links
        // navLinks.forEach((link, index) => {
        //     if (link.style.animation) {
        //         link.style.animation = ''
        //     } else {
        //         link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0}s`
        //     }
        // })
    }


    burger.addEventListener('click', () => {
        toggleNav();
    })

    navLinks.forEach((link, index) => {
        link.addEventListener('click', () => {
            toggleNav()
        })
    })
}

navSlide()