// setTimeout 5회 반복시키기
// 1, 2, 3, 4, 5 출력

// for (var i = 1; i < 6; i++) { 
//     setTimeout(function() { console.log(i); }, i*1000 ); 
// }

for (let i = 1; i < 6; i++) { 
    setTimeout(function() { console.log(i); }, i*1000 ); 
}