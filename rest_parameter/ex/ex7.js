/*
7. 글자를 알파벳순으로 정렬해주는 함수를 만들고 싶습니다.

정렬('bear')라고 사용하면
콘솔창에 a b e r 이렇게 입력한 문자를 알파벳 순으로 출력되게 만들고 싶으면 어떻게 해야할까요? 
(sort() 함수 사용가능)
*/

function 정렬(message) {
    console.log([...message].sort());
    console.log([...message].sort().join()); // join(): array 내의 자료를 전부 붙여서 문자로 만들고 싶으면
    console.log(...[...message].sort());
}

정렬('bear'); 
