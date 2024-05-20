import {
    academicData
} from "../data/academic-data.js";

export const academicContainer = document.querySelector(".academic__courses");
const academicCards = academicContainer.map(
    (data) =>
    `
    <article class="academic__courses__box">
        <ul class="academic__courses__list">
            <li class="academic__courses__item__img"><img src="${data.img}">
            </li>
            <li class="academic__courses__item__title">
                <h4>${data.title}</h4>
            </li>
            <li class="academic__courses__item__subtitle">
                <p>${data.date}</p>
            </li>
        </ul>
    </article>
 `
).join('');

academicContainer.innerHTML = academicCards;