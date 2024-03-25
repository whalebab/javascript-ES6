// 1. spread 문제 1

var a = [1, 2, 3];
var b = '김밥';
var c = [...b, ...a];
console.log(c);

// 위 코드의 출력 결과는?
// ['김', '밥', 1, 2, 3]