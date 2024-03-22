let buttons = document.querySelectorAll('button');
let modals = document.querySelectorAll('div');

for (let i = 0; i < 3; i++){

buttons[i].addEventListener('click', function(){
    modals[i].style.display = 'block';
});
}