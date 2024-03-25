// ... spread operator
// 뭔가 내용물을 빼고 싶을 때 사용

// 1. Array에 붙이면 대괄호를 제거해줌
// 2. 문자에 붙이면 펼쳐줌

// 예시 1.
let array = ['hello', 'world'];
console.log(...array);

// 예시 2.
let msg = 'hello';
console.log(...msg);
// 'h','e','l','l','o'

// 문자도 array처럼 인덱싱 가능
// console.log(msg[0]); // h

// ※ spread operator를 어디에 활용하면 좋을까?
// -> Deep copy 할때 유용함

// 1. Array 합치기 / 복사
// 2. Deep copy : 독립적인 복사

let num = [1, 2, 3];
let num2 = [4, 5];

// 예시1. 복사
let num3 = [...num];
console.log(num3);

// 예시1. 합치기
num3 = [...num, num2];
console.log(num3);

let array1 = [1, 2, 3];
let array2 = array1;

array1[3] = 4;

console.log(array1);
console.log(array2);

// 이때, 각각 독립적인 값을 가지도록 Array, Object를 복사하려면?
let newArray1 = [1, 2, 3];
let newArray2 = [...newArray1];

newArray1[3] = 4;

console.log(newArray1); // [1, 2, 3, 4]
console.log(newArray2); // [1, 2, 3]


