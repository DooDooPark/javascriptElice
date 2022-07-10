// const btn = document.querySelector('button');

// btn.addEventListener('click', (e) => {
//     console.log('주문이 완료되었습니다.');
// })

// const orders = document.querySelectorAll('li');

// orders.forEach(order => {
//     order.addEventListener('click', e => {
//         console.log('item Clicked');
//         console.log(e);
//         console.log(e.target);
//         console.log(order);
//     });
// });
const ul = document.querySelector('ul');
const btn = document.querySelector('button');

btn.addEventListener('click', (e) => {
    const li = document.createElement('li');
    li.textContent = '한꺼번에 주문하기';
    ul.prepend(li);
    // ul.append(li);
});

const orders = document.querySelectorAll('li');

orders.forEach(order => {
    order.addEventListener('click', e => {
        e.target.remove();
        console.log(`${e.target.innerText} 주문이 완료 되었습니다.`)
    })
})