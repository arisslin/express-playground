const buttonGet = document.querySelector('[data-js=get-button-1]');
const paragraphGet = document.querySelector('[data-js=get-response-1]');

buttonGet?.addEventListener('click', () => {
  fetch('http://localhost:3000')
    .then((res) => res.text())
    .then((data) => {
      paragraphGet!.textContent = data;
    });
});

const buttonPost = document.querySelector('[data-js=post-button-1]');
