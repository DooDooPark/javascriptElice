const list = document.querySelector('ul');

console.log(list.children);
console.log(Array.from(list.children));

Array.from(list.children).forEach(child => {
    child.classList.add('move-name');
})

const moviename = document.querySelector('.middle');

console.log(moviename.parentElement);
console.log(moviename.parentElement.parentElement);
console.log(moviename.nextElementSibling);
console.log(moviename.previousElementSibling);