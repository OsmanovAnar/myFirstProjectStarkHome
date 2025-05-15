let burgerEl = document.querySelector('#burgerMenuFormediaScreen')
let navEl = document.querySelector('.nav ul')


burgerEl.onclick = () => {
    showNavigation()

    function showNavigation() {

        if (navEl.style.display === 'flex') {
            navEl.style.display = 'none'
        } else {
            navEl.style.display = 'flex'
        }
    }

}