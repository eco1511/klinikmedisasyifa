const createInfoItemTemplate = (data) => `
    <div tabindex="0" class="info-item">
        <div class="info-item__header">
        <img class="info-item__header__poster" src="${data.thumbnail}" alt="image">
            <div tabindex="0" class="info-item__header__date">
            <p>${data.pubDate}</p>
            </div>
        </div>
        <div tabindex="0" class="info-item__content">
            <h3><a href="${data.link}" target='_blank'>${data.title}</a></h3>
            <p>${data.description}</p>
        </div>
    </div>
  `;

export {
  createInfoItemTemplate,
};
