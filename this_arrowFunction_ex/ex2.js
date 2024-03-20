let arrayData = { 
    data : [1,2,3,4,5]
}

// ArrayFunction 미적용 코드
// arrayData.sum = function() {
//     let sum = 0;
//     this.data.forEach( function(num) {
//         sum += num;
//     });
//     console.log(sum);
// }

// ArrayFunction 적용코드
arrayData.sum = () => {
    let sum = 0;
    arrayData.data.forEach((num) => {
        sum += num;
    })
    console.log(sum);
}

arrayData.sum();