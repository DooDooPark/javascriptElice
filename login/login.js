const form = document.querySelector('.login-form');
const feedback = document.querySelector('.feedback');
// const username = document.querySelector('#username');
const regexp = /^[a-zA-Z]{6,12}$/;
form.addEventListener('submit', e => {
    e.preventDefault();
    // console.log(username.value);
    console.log(form.username.value);
    const username = form.username.value;


    // if (regexp.test(username)) {
    //     feedback.textContent = '환영합니다';
    // } else {
    //     feedback.textContent = '영문 6~12자 사이로 적어주셔야 합니다.'
    // }
});

form.username.addEventListener('keyup', e => {
    if (regexp.test(e.target.value)) {
        feedback.textContent = '환영합니다';
    } else {
        feedback.textContent = '영문 6~12자 사이로 적어주셔야 합니다.'
    }
})