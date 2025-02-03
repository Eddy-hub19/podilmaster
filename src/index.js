import './js/swiper.js';
import './js/template.js';
import './js/desktop-menu.js';
import './js/mobile-menu.js';
import './js/modal.js';

function highlightCurrentLink() {
  let url = window.location.href
  let links = document.querySelectorAll(".menu-list__item-link")

  for (let i = 0; i < links.length; i++) {
    let link = links[i]
    let linkUrl = link.href

    if (url === linkUrl) {
      link.classList.add("current")
    } else {
      link.classList.remove("current")
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  highlightCurrentLink()
})
