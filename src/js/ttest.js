const testInput = document.querySelector('.input-test');
const testBtn = document.querySelector('.btn-test');

testBtn.addEventListener("submit", event => {
    event.preventDefault();
    console.log(testInput.textContent)
})