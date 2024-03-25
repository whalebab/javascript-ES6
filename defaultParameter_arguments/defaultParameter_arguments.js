// 파라미터가 2개 들어가는 함수인데
// 1개만 써도 에러가 안남

// 함수의 default 파라미터
// b = 10 -> b 자리에 아무것도 안넣을 경우 10을 넣어주세요~
// -> 함수 내 b자리에 파라미터 안넣었을때 발동함

function sum(a, b = 10 ) {
    console.log(a + b);
}

sum(1, 2);

function temporaryFunc() {
    return 10;
}

// b자리에 파라미터 안넣었을 때만 발동
function sum(a, b = temporaryFunc()) {
    console.log(a + b);
}

sum(1);

// 함수의 argument
// 모든 파라미터를 한꺼번에 다루고 싶은 경우 = arguments 사용
function param(a, b, c) {
    console.log(arguments);
    console.log(arguments[0]); // 첫번째 파라미터
    console.log(arguments[1]); // 두번째 파라미터
    console.log(arguments[2]); // 세번째 파라미터
}
// arguments[0] : 모든 파라미터를 [] 안에 넣은 변수

param(1, 2, 3);

// 입력한 파라미터를 전부 콘솔창에 출력해주는 함수?
function param2(a, b, c, d, f) {
    for(let i =0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}

param2(2, 3, 4);