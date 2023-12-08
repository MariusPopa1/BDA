const headerElement = document.querySelector('header');








headerElement.children[0].addEventListener('click', () => {
  window.location.href = 'index.html';
});
headerElement.children[1].addEventListener('click', () => {
  window.location.href = 'transfer.html';
});
headerElement.children[2].addEventListener('click', () => {
  window.location.href = 'logIn.html';
});

function transfer() {
  window.location.href = 'transfer.html';
}
function singup() {
  window.location.href = 'singUp.html';
}
function forget() {
  window.location.href = 'forget.html';
}