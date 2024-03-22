// 변수: 자료 임시 저장공간

// 변수 키워드: var, let, const
// 선언, 할당, 범위

var name = 'Kim';
var name = 'Park';

// 재할당 : 변수에 값을 바꾸는 행위

// var : 재선언 O | 재할당 O | 범위 function
// let : 재선언 X | 재할당 O | 범위 {}
// const : 재선언 X | 재할당 X | 범위 {}

let lastName = 'Kim';
let age = 20;
// let age = 30; - Uncaught SyntaxError: Identifier 'age' has already been declared

const firstName = 'Kim';
// firstName = 'Park'; - Uncaught TypeError: Assignment to constant variable

const person = { name : 'kim' }
person.name = 'park';

// const로 obejct를 만들었을때...
// 오브젝트 내부 값을 변경해도 에러가 안남
// ※ 왜?? const 변수 자체를 재할당한게 아님


// 수정불가능한 오브젝트를 만들고 싶으면??
Object.freeze(person); // person이라는 오브젝트를 수정불가능하게 freeze 하라는 뜻
person.name = 'Lee';

// -----------------------------------------------------------

function func1() {
    var grade = 90;
    grade;
}

// var 변수는 function 안에서만 존재함
// variable.js:41 Uncaught ReferenceError: grade is not defined
console.log(grade);

if (true) {
    let agree = 'Y';
    const language = 'ko';
}

// let, const 변수의 생존범위는 {} (중괄호) 안