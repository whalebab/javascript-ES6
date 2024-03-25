// 4. default 파라미터 문제 2

function 함수(a = 5, b = a * 2 ){
    console.log(a + b);
}
함수(undefined, undefined);
//위 코드의 출력 결과는? 15