import { portafolioData, skillsData } from "../data/portafolio-data.js";

export const portafolioContainer = document.querySelector(".portafolio__container");
const errorImage = document.querySelector(".error-image");

// Verifica si estás en index.html
const isIndexPage = window.location.pathname.includes("portafolio.html");

// Si estás en index.html, limita los datos a los primeros 3 elementos
const dataToDisplay = isIndexPage ?  portafolioData : portafolioData.slice(0, 3) ;

const portafolioCards = dataToDisplay.map(data => {
  // Construir el enlace al demo solo si data.demo no está vacío
  const demoLink = data.demo ? 
    `<a href="${data.demo}" target="_blank" rel="nofollow noreferrer noopener" class="card__btn">Ver proyecto</a>` 
    : '';
  
  // Crear una lista de clases para el artículo basadas en las habilidades
  const skillsClasses = data.skills.map(skill => skill.toLowerCase()).join(' ');

  return `
    <article class="portafolio__card ${skillsClasses}">
      <div class="img__container">
        <img src="${data.img}" alt="${data.title}" class="card__img">
      </div>
      <div class="portafolio__icons">
        ${data.skills.map(skill => `
          <div class="icon__caja">
            <iconify-icon class="iconify__icon" icon="${skillsData[skill]}"></iconify-icon>
          </div>
        `).join('')}
      </div>
      <h3>${data.title}</h3>
      <div class="btn__container">
        ${demoLink}
        <a href="${data.repo}" target="_blank" rel="nofollow noreferrer noopener" class="card__btn">Ver repositorio</a>
      </div>
    </article>
  `;
}).join('');

portafolioContainer.innerHTML = portafolioCards;

// Espera a que el DOM esté completamente cargado antes de ejecutar el código
document.addEventListener("DOMContentLoaded", function() {
  const filterItems = document.querySelectorAll('.data__caja');
  const portfolioCards = document.querySelectorAll('.portafolio__card');

  filterItems.forEach(item => {
    item.addEventListener('click', function() {
      const filterValue = this.getAttribute('data-filter').toLowerCase();
      let anyVisible = false;

      portfolioCards.forEach(card => {
        const cardSkills = card.className.split(' ');

        if (filterValue === 'all' || cardSkills.includes(filterValue)) {
          card.style.display = 'block';
          anyVisible = true;
        } else {
          card.style.display = 'none';
        }
      });

      // Mostrar u ocultar la imagen de error
      if (anyVisible) {
        errorImage.style.display = 'none';
      } else {
        errorImage.style.display = 'block';
      }

      filterItems.forEach(item => item.classList.remove('active__filter'));
      this.classList.add('active__filter');
    });
  });

  // Cambia el estilo del header al hacer scroll
  const header = document.querySelector('header');
  window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0);
  });

  // Agrega un evento de escucha para detectar el desplazamiento de la página
  const menu = document.querySelector('.menu');
  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      menu.classList.add('shadow');
    } else {
      menu.classList.remove('shadow');
    }
  });
});
