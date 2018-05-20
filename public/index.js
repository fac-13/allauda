/* eslint-disable */
const main = document.querySelector('main');
const tryMeButton = document.getElementById('button__tryMe');
const randomGift = document.getElementById('link__randomGift');

// let content = localStorage.getItem('content')
//   ? JSON.parse(localStorage.getItem('content'))
//   : {};

/**
 * fetch API content from server
 */
const fetchContent = url => {
  fetch(url)
    .then(response => {
      return response.json();
    })
    .then(data => {
      content = data;
      // storeContent(content);
      renderContent(content);
    });
};

/**
 * Check if there is a service worker and register it
 */
if ('serviceWorker' in navigator) {
  fetchContent('/api/tryContent');
  navigator.serviceWorker.register('/sw.js').then(() => {
    console.log('Service Worker Registered');
  });
}

/**
 * Add event listeer to randomGiftButton to check if the user is online
 */
if (window.location.pathname == '/try') {
  randomGift.addEventListener('click', () => {
    checkOffline();
  });
}

/**
 * Check if user is online, if offline open dialog box
 */
const checkOffline = () => {
  //   if (!window.navigator.onLine) {
  //     const dialog = document.querySelector('dialog');
  //     setTimeout(() => {
  //       dialog.show();
  //     }, 500);
  //     setTimeout(() => {
  //       dialog.close();
  //     }, 4000);
  //   } else {
  //     console.log("You are online");
  fetchContent('/api/tryContent');
  //   }
};

/**
 * stores content in localStorage
 */
// const storeContent = () => {
//   localStorage.setItem('content', JSON.stringify(content));
// };

/**
 * @param  {} content - content stored in localStorage
 * Render content on the page
 */

const renderContent = content => {
  const section = document.querySelector('.section__content');
  for (let item in content) {
    content[item].map(el => {
      const articles = `<div class="content__articles"><a href="${
        el.url
      }" target="_blank" class="link__title"><h3 class="title">${
        el.title
      }</h3></a><p>${el.description}</p><img class="img__article" src="${
        el.urlToImage
      }"/></div>`;
      section.insertAdjacentHTML('beforeend', articles);
    });
  }
};
