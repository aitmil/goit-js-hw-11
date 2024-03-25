export function galleryTemplate(arr) {
  return arr
    .map(
      ({
        largeImageURL,
        webformatURL,
        tags,
        likes,
        views,
        comments,
        downloads,
        ...info
      }) => `<li class="gallery-item">
        <div class="lightbox">
          <a class="gallery-link" href="${largeImageURL}">
            <img class="gallery-image" src="${webformatURL}" alt="${tags}"
          /></a>
        </div>
        <ul class="gallery-data-list">
          <li class="gallery-data-item">Likes${likes}</li>
          <li class="gallery-data-item">Views${views}</li>
          <li class="gallery-data-item">Comments${comments}</li>
          <li class="gallery-data-item">Downloads${downloads}</li>
        </ul>
      </li>`
    )
    .join('');
}
