const button = document.querySelector('button');

function destroy() {
  const error = `<div class='error'>Something went wrong please click the button for a solution</div>`;

  document.body.insertAdjacentHTML('beforeend', error);
}

button.onclick = () => setInterval(destroy, 1000);
