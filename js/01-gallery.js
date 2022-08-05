import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

// Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.
// Реализация делегирования на div.gallery и получение url большого изображения.
// Подключение скрипта и стилей библиотеки модального окна basicLightbox. Используй CDN сервис jsdelivr и добавь в проект ссылки на минифицированные (.min) файлы библиотеки.
// Открытие модального окна по клику на элементе галереи. Для этого ознакомься с документацией и примерами.
// Замена значения атрибута src элемента <img> в модальном окне перед открытием. Используй готовую разметку модального окна с изображением из примеров библиотеки basicLightbox.

const galleryRef = document.querySelector(".gallery");
const galleryItemMarkup = createGalleryItemMarkup("galleryItem");

galleryRef.addEventListener("click", onItemContainerClick);

function createGalleryItemMarkup(item) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>`;
    })
    .join("");
}

galleryRef.insertAdjacentHTML("beforeend", galleryItemMarkup);

function onItemContainerClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }
  const image = event.target.dataset.source;

  const modalWindow = basicLightbox.create(`
    <img src="${image}" width="800" height="600">`);

  modalWindow.show();

  galleryRef.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      modalWindow.close();
    }
    galleryRef.removeEventListener("click", onItemContainerClick);
  });
}
