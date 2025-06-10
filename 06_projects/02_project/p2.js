console.log("dhiraj");

const form = document.querySelector('form');
const result = document.querySelector('#result');

form.addEventListener('submit', function (e) {
    e.preventDefault();

result.addEventListener('click', function(e){



const height = parseInt(document.querySelector('#height').value);

const weight = parseInt(document.querySelector('#weight').value);



if (height==='' || height<1 || isNaN(height)) {
    result.innerHTML = `enter a valid height ${height}`
}
else if (weight==='' || weight<1 || isNaN(weight)) {
    result.innerHTML = `enter a valid height ${weight}`
}
else{
    const bmi = (weight / ((height*height) / 10000)).toFixed(2);

    // showing result
    result.innerHTML = `<span>${bmi}</span>`
}

})

});