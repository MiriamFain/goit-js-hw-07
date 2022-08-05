import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector(".gallery");
const galleryItemMarkup = createGalleryItemMarkup("galleryItem");

function createGalleryItemMarkup(item) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<ul class="gallery__list><li>
      <a class="gallery__item" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a></li></ul>`;
    })
    .join("");
}

galleryRef.insertAdjacentHTML("beforeend", galleryItemMarkup);

const modalWindow = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 150,
});

// galleryRef.addEventListener("keydown", (event) => {
//   if (event.key === "Escape" || event.key === "Enter") {
//     modalWindow.close();
//   }
// });
