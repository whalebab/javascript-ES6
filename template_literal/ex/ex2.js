let pents = 0;
let socks = 100;

`바지 ${pents} 양말 ${socks}`;

// Q1. patns가 0개면 `바지안팔아요 양말 100` 이라는 문자로 바꾸는 해제분석기 구현

function 해체분석기(문자들, 변수들1, 변수들2) {
    if(변수들1 == 0) {
        console.log( `바지안팔아요` + 문자들[1] + 변수들2 );
    }
}

해체분석기`바지 ${pents} 양말 ${socks}`;