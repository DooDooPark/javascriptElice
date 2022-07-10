const link = document.querySelector('a');
console.log(link.getAttribute('href'));
link.setAttribute('href', 'https://www.google.com');
link.innerHTML = '역시 검색은 구글이지';

const msg = document.querySelector('p');

console.log(msg);
console.log(msg.getAttribute('class'));
msg.setAttribute('class', 'success');

msg.setAttribute('style', 'color:green');

// css color change

const h1 = document.querySelector('h2');

h1.style.margin = '50px';
h1.style.color = 'red';
h1.style.fontSize = '50px'

const tagP = document.querySelector('p');
tagP.classList.remove('error');
tagP.classList.add('success');