
document.querySelector('#button').addEventListener('click', function() {
    setTimeout( () => { console.log(this.innerHTML) }, 1000);
});