// 2. spread 문제 2

var a = [1, 2, 3];
var b = ['you', 'are'];
var c = function(a, b){
    console.log( [[...a], ...[...b]][1] )
    // console.log( [[1, 2, 3], 'you', 'are'[1] )
}

c(a, b);
// 대괄호가 가득한 위 코드의 출력 결과는?
// you