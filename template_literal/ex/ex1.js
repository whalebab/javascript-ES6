let pents = 20;
let socks = 100;

`바지 ${pents} 양말 ${socks}`;

// Q1. 문자 중간 '양말'과 '바지' 단어 순서를 바꾸고 싶음

function 해체분석기(문자들, 변수들1, 변수들2) {
    console.log( 문자들[1] + 변수들1 + 문자들[0] + 변수들2 );
}

해체분석기`바지 ${pents} 양말 ${socks}`; // 양말 20바지 100