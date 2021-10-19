export const menuMobile = () => {
    let menuButton = document.querySelector('#mobile-menu');

    menuButton.addEventListener('click', () => {
        let menu = document.querySelector('.mobile-link');

        menu.classList.toggle('hidden')
    })
}