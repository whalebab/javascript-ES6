// ...spread operator
// 함수 파라미터 넣을때

function sum(a, b, c) {
    console.log(a + b + c);
}

// array 내의 모든 데이터를 파라미터로 집어넣고 싶은 경우
let array = [10, 20, 30];
//sum(array[0], array[1], array[2]);
//sum.apply(undefined, array);
sum(...array);

// apply 함수 개념설명
// apply() : 함수를 옮겨와서 실행해주세요

let person = {
    hi : function() {
        console.log(this.name + ' 안녕');
    }
}

let person2 = {
    name : '사람이름'
}

// person.hi()를 person2에 적용하고 싶을때
// person.hi().apply(person2)
person.hi.apply(person2, [1, 2]);
person.hi.call(person2, 1, 2);

// apply / call 비슷함
// apply는 파라미터를 apply형태로 집어넣기 가능