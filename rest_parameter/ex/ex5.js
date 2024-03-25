/*
5. array를 만들어주는 함수를 제작하고 싶습니다.

파라미터로 자료들을 입력하면 그걸 그대로 array를 만들어주는 함수를 만들고 싶습니다. 
이렇게 작성하면 [1,2,3,4,5]가 출력되어야합니다.
함수에 숫자를 100개 집어넣으면 Array안에 숫자100개가 들어가야하고요.
어레이라는 함수를 어떻게 만들면 될까요? (new 키워드 사용금지)
*/

function array() {
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments);
    }
}

function array2(...rest) {
    return rest;
}

var newArray = array(1,2,3,4,5);
var newArray = array2(1,2,3,4,5);
console.log(newArray);