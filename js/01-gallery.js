import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryItemsElement = document.querySelector(".gallery");

galleryItems.forEach((item) => {
  const li = document.createElement("li");
  li.classList.add("gallery__item");
  li.innerHTML = `<a class="gallery__link" href="${item.original}">
  <img
    class="gallery__image"
    src="${item.preview}"
    data-source="${item.original}"
    alt="${item.description}"
  />
</a>`;
  galleryItemsElement.append(li);
});
galleryItemsElement.addEventListener("click", onClickLightboxImg);

function onClickLightboxImg(event) {
  const clickedOn = event.target;

  if (clickedOn.nodeName !== "IMG") {
    return;
  }
  event.preventDefault();
  const instance = basicLightbox.create(
    `<img src="${clickedOn.dataset.source}"/>`
  );
  instance.show();

  galleryItemsElement.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      instance.close();
    }
  });
}
