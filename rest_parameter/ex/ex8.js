/*
8. 데이터마이닝 기능 만들기 

글자세기('aacbbb') 라고 입력하면 콘솔창에
{ a : 2, b : 3, c : 1 }
▲ 이렇게 출력해주는 글자세기() 라는 함수를 만들고 싶습니다.
쉽게말하자면 입력한단어에 들어있는 알파벳의 갯수를 세어서 오브젝트에 기록해주고 출력까지 해주는 함수입니다. 
글자세기라는 함수를 어떻게 만들면 될까요? 
*/

글자세기('aacbbb');

function 글자세기(message) {
    let result = {};
    [...message].forEach((data) => {
        if ( result[data] > 0) {
            result[data] = result[data] + 1;
        } else {
            result[data] = 1;
        }
    });
    console.log(result);
}
