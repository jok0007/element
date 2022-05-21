const items = document.querySelectorAll('li');
const parent = document.querySelector('ul');

const array = [...items];

array.sort(function (a, b) {
  return  a.children[0].innerText - b.children[0].innerText;
});


array.forEach(item => {  
  parent.appendChild(item);
});
