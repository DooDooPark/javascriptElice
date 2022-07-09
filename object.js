
let user = {
    name: '우리의두두',
    age: 30,
    email: 'test@superstar.com',
    address: '홍길동 11동',
    food: ['김치찌게', '제육볶음'],

    payment: function () {
        console.log('결제 완료 되었습니다.');
    },
    deliverystart: function () {
        console.log('배달이 시작되었습니다.');
    },
    logdelivery: function () {
        console.log(this.food);
    },

    arrowlog: () => {
        console.log(this.food);
    }
};

// let name = () => {
//     console.log('type your name');
// }

// console.log(name());

// user.arrow();
// user.logdelivery();
// console.log(this);