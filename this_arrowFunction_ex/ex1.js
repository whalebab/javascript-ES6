let human = {
    name : '손흥민',
    sayHi : () => {
        console.log('안녕 나는 ' + human.name);

        // ↓ arrow Function 안쓸때
        //console.log('안녕 나는' + this.name);
    }
}

human.sayHi();