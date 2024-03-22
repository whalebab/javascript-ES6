// 변수의 hoisting 현상
//console.log(age);   // undefined

var age = 30;

//console.log(age);   // 30

// Variable Hoisting이란?
// -  js에서 변수의 선언을 변수 범위 맨위로 끌고 오는 현상
// ex)
// var age;
// age = 30;

// let, const도 변수 호이스팅이 일어나지만
// 선언만 되고 초기화는 일어나지 않는다. (초기화가 일어나지 않아 undefined가 출력되지 않음 | 즉, 메모리에 준비되어 있지 않은 상태)

// var -> let으로 변경 시 일어나는 에러
// Uncaught ReferenceError: Cannot access 'age' before initialization

// ※ TDZ(Temporary Dead Zone)
// 변수의 선언과 변수의 초기화 사이의 변수에 접근할 수 없는 지점
// 즉, 초기화되지 않은 변수가 있는 곳

// ----------------------------------------------------------------------------

// 전역변수: 모든 곳에서 쓸수 있는 변수
// var age = 30; (전역변수)

// window로 전역변수 만들기
window.grade = 90;

console.log(grade);

function func() {
    console.log(age);
    var name = 'kim';       // 지역변수 
}

func();

// ----------------------------------------------------------------------------

// 함수 호이스팅
// - js에서 함수의 선엄을 범위 맨위로 끌고 오는 현상
// 최상단에 function function1() {} 선언됨

function function1() {

}

// 연습문제
if (true) {
    let a = 1;
    var b = 2;
    if (true) {
        let b = 3;
    }
    console.log(b); // 2
                    // let, const 변수의 생존범위는 {} 안에서만 생존가능
}