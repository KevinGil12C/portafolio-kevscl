const d = document;

const headerBg = d.querySelector("header");
const panelIsActive = d.querySelector("menu__list");

export default function menuHamburger(btnHamburger, panel, menuLink){
    d.addEventListener("click", (e)=>{
        if(e.target.matches(btnHamburger) || e.target.matches(`${btnHamburger} *`) ){
            d.querySelector(panel).classList.toggle("is-active");
            d.querySelector(btnHamburger).classList.toggle("is-active")
        }
        if(e.target.matches(menuLink)){
            d.querySelector(panel).classList.remove("is-active");
            d.querySelector(btnHamburger).classList.remove("is-active");
        }
        if(panelIsActive.classList.contains("is-active")){
            headerBg.classList.remove("blur");
        }else{
            headerBg.classList.add("blur");
        }
    })
}


menuHamburger(".hamburger", ".panel", ".menu__link");