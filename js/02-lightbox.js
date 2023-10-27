import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryItemsElement = document.querySelector(".gallery");

galleryItems.forEach((item) => {
  const li = document.createElement("li");
  li.classList.add("gallery__item");
  li.innerHTML = `<a class="gallery__link" href="${item.original}">
  <img
    class="gallery__image"
    src="${item.preview}"
    alt="${item.description}"
  />
</a>`;
  galleryItemsElement.append(li);
});

galleryItemsElement.addEventListener("click", onClickLightboxImg);

function onClickLightboxImg(event) {
  event.preventDefault();
}

const lightbox = new SimpleLightbox(".gallery a");
console.log(lightbox);
