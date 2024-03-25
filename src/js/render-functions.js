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
      }) => ` <li class="gallery-item">
      <div class="lightbox">
        <a class="gallery-link" href="${largeImageURL}">
          <img class="gallery-image" src="${webformatURL}" alt="${tags}"
        /></a>
      </div>
      <ul class="gallery-data-list">
        <li class="gallery-data-item">
          <h2>Likes</h2>
          <p>${likes}</p>
        </li>
        <li class="gallery-data-item">
          <h2>Views</h2>
          <p>${views}</p>
        </li>
        <li class="gallery-data-item">
          <h2>Comment</h2>
          <p>${comments}</p>
        </li>
        <li class="gallery-data-item">
          <h2>Downloads</h2>
          <p>${downloads}</p>
        </li>
      </ul>
    </li>
`
    )
    .join('');
}
