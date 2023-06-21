let checkButton = document.querySelector('button');
let password = document.querySelector('#password')
let confirmPassword = document.querySelector('#confirmPassword');
let pass_value = password.value;
let confirm_value = confirmPassword.value;
let input = document.querySelector('input');



document.querySelector("button").addEventListener('click', function () {

    if (password.value != confirmPassword.value) {
        input.className = '';
        input.classList.add("red");
    }

    else {
        input.className = '';
        input.classList.add("green");
    }
})