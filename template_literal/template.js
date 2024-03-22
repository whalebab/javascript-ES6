// `` : backtick / backquote

let name = '손흥민';
let msg = `안녕하세요 ${name} 입니다.`;


// backquote 문자열의 장점
// 1. 엔터키 가능
// 2. 중간중간 변수넣기 쉬움

function 해체분석기(문자들, 변수들, 변수들2) {
    console.log(문자들);
    console.log(변수들);
    console.log(변수들2);
}

해체분석기`안녕하세요 ${ name } ${ name }`;

// 해체분석기 파마미터
// 1. ${} 양옆 문자들을 Array화 해줌
// 2. ${변수}를 뜻함
// 3. 두번째 ${변수}를 뜻함

// tagged literal 사용 예시 )
// 글자의 순서를 변경하고 싶을때

// ex) 입니다 ${name} 안녕하세요

function 해체분석기2(문자들, 변수들) {
    console.log( 문자들[1] + 변수들 + 문자들[0] );

}

해체분석기2`안녕하세요 ${ name } 입니다`;