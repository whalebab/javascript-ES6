// 3. default 파라미터 문제 1

function 함수(a = 5, b = a * 2 ){
    console.log(a + b);
    return 10
}
함수(3);
//위 코드의 출력 결과는? 9