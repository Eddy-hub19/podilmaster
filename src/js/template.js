document.addEventListener('DOMContentLoaded', function () {
  const elementTemplate = document.getElementById('element-template');

  function initializeElementsFromHTML(sectionId) {
    const elementsList = document.getElementById(sectionId);
    const rawElements = Array.from(
      elementsList.querySelectorAll('li[data-number][data-text]')
    );

    rawElements.forEach(rawElement => {
      const number = rawElement.getAttribute('data-number');
      const text = rawElement.getAttribute('data-text');

      const elementClone = elementTemplate.content.cloneNode(true);
      elementClone.querySelector('.element-number').textContent = number;
      elementClone.querySelector('.element-text').textContent = text;

      rawElement.replaceWith(elementClone);
    });
  }

  initializeElementsFromHTML('elements-list-1');
  initializeElementsFromHTML('elements-list-2');
  initializeElementsFromHTML('elements-list-3');
  initializeElementsFromHTML('elements-list-4');
  initializeElementsFromHTML('elements-list-5');
});
