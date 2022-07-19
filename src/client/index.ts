const serverUrl = 'http://localhost:3000';

const buttonPostJsonExample: HTMLButtonElement | null = document.querySelector(
  '[data-js=post-button-json-example]'
);

buttonPostJsonExample?.addEventListener('click', () => {
  const data = {
    test: 'Hello World!',
  };

  fetch(serverUrl + '/post-json/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.text())
    .then((text) => {
      console.log(text);
    });
});

const buttonPostRawExample: HTMLButtonElement | null = document.querySelector(
  '[data-js=post-button-raw-example]'
);

buttonPostRawExample?.addEventListener('click', () => {
  const data = 'Hello World!';

  fetch(serverUrl + '/post-raw/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/octet-stream',
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.text())
    .then((text) => {
      console.log(text);
    });
});
