const para = document.querySelector('p');

// para.innerText = '양념고기';


const params = document.querySelectorAll('p');

// params.forEach(para => {
//     para.innerText += '양념치킨';
// });

const content = document.querySelector('.content');

content.innerHTML += '<h2>올해 최고의 치킨!</h2>';

const chickens = ['A', 'B', 'C'];

chickens.forEach(val => {
    content.innerHTML += `<p>${val}</p>`;
})