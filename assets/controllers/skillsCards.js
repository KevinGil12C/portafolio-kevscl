import skillData from "../data/skills-data.js";

export const card__container = document.querySelector('.slide__track');

const cardSkill =  skillData.map(
    (card) => `
    <div class="slide">
        <iconify-icon class="card__icon" icon="${card.icon}"></iconify-icon>
        <h3 class="tag">${card.title}</h3>
    </div>
`).join(" ");

card__container.innerHTML = cardSkill;
