import skillData from "../data/skills-data.js";

export const card__container = document.querySelector('.skills__container');

const cardSkill =  skillData.map(
    (card) => `
    <div class="card">
        <iconify-icon class="card__icon" icon="${card.icon}"></iconify-icon>
        <h3 class="card__description">${card.title}</h3>
    </div>
`).join(" ");

card__container.innerHTML = cardSkill;
