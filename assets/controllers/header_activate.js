export default function menuActive(){
    document.addEventListener('DOMContentLoaded', () => {
        const menuLinks = document.querySelectorAll('.menu__link');
    
        menuLinks.forEach(link => {
            link.addEventListener('click', (event) => {
                menuLinks.forEach(link => link.classList.remove('active'));
                event.target.classList.add('active');
            });
        });
    });
    
}
menuActive();