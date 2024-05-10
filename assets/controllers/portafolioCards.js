import { portafolioData, skillsData } from "../data/portafolio-data.js";

export const portafolioContainer = document.querySelector(".portafolio__container");
const portafolioCards = portafolioData.map(
  (data) =>
    `
 <article class="portafolio__card">
          <div class="img__container">
            <img
            src=${data.img}
            alt=${data.title} class="card__img">
          </div>
          <div class="portafolio__icons">
          ${data.skills.map(skill =>`
            <div class="icon__caja">
                <iconify-icon class="iconify__icon"  icon=${skillsData[skill]}></iconify-icon>
                </div>
                `).join('')}
          </div>
          <h3>${data.title}</h3>

          <div class="btn__container">
            <a href=${data.demo}  target="_blank" rel="nofollow noreferrer noopener" class="card__btn">Ver proyecto</a>
            <a href=${data.repo}" target="_blank" rel="nofollow noreferrer noopener" class="card__btn">Ver repositorio</a>
          </div>
        </article>
 `
).join('');

portafolioContainer.innerHTML = portafolioCards;