// arguments : 모든 파라미터를 []에 담아줌

function param2(a, b, c, d, f) {
    for(let i =0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}
param2(2, 3, 4);

// Rest Parameter
// 파라미터 자리에 오는 모든 파라미터를 []에 담아줌
// ...rest : "여기 뒤에 있는 모든 파라미터" 라는뜻

// ...rest : 모든 파라미터를 array로 보관해줌
function func(a, b, ...rest) {
    console.log(rest);
}

// 함수안에 들어온 파라미터를 전부 담은 array 출력
func(1, 2, 3, 4, 5, 6, 7); // 3, 4, 5, 6, 7

// ...rest vs ...spread 구분하기
// 1. 함수 파라미터 자리에 붙으면 rest
// 2. 나머지는 spread

// 예제
// Q. 모든 파라미터들을 하나씩 콘솔창에 출력해주는 함수?
function func2(...rest) {
    for (let i = 0; i < rest.length; i++) {
        console.log(rest[i]);
    }
}
func2(1,2,3,4);

// ※ rest의 주의점
// 1. 가장 마지막에 써야함
// 2. 두번 이상 사용 금지