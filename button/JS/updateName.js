const newNome = document.querySelector('button');

newNome.addEventListener('click', updateName);

function updateName() {
  var name = prompt('enter your name');
  newNome.textContent = 'Player: ' + name;
}