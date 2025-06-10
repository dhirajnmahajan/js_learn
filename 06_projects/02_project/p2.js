console.log("dhiraj");

const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();


const height = parseInt(document.querySelector('#height').value);
const weight = parseInt(document.querySelector('#weight').value);
const result = document.querySelector('#result');


if (height==='' || height<1 || isNaN(height)) {
    result.innerHTML = `enter a valid height ${height}`
}
else if (weight==='' || weight<1 || isNaN(weight)) {
    result.innerHTML = `enter a valid weight ${weight}`
}
else{
    const bmi = (weight / ((height*height) / 10000)).toFixed(2);

    // showing result
    result.innerHTML = `<span>${bmi}</span>`
}


});