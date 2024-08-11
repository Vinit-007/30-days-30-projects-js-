const submitbtn = document.getElementById('submitBtn');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passError = document.getElementById('passError');


submitbtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (validateName() && validateEmail() && validatepass()) {
        alert("form submitted sucessfully")
    }
})


function validateName() {
    let name = document.getElementById('name').value;

    if (name.length == 0) {
        nameError.innerHTML = "Name is required !";
        nameError.previousElementSibling.classList.add('material-symbols-outlined')
        nameError.previousElementSibling.innerText = 'close';
        return false
    }

    if (!name.match(/^[A-Za-z]+ [A-Za-z]+$/)) {
        nameError.innerHTML = "Write full Name";
        nameError.previousElementSibling.classList.add('material-symbols-outlined')
        nameError.previousElementSibling.innerText = 'close';
        return false;
    }
    nameError.innerHTML = " ";
    nameError.previousElementSibling.classList.add('material-symbols-outlined')
    nameError.previousElementSibling.innerText = 'check';
    return true;
}


function validateEmail() {
    let email = document.getElementById('email').value;

    if (email.length == 0) {
        emailError.innerHTML = "email is required !";
        emailError.previousElementSibling.classList.add('material-symbols-outlined')
        emailError.previousElementSibling.innerText = 'close';
        return false
    }

    if (!email.match(/ ^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/)) {
        emailError.innerHTML = "Write full email";
        emailError.previousElementSibling.classList.add('material-symbols-outlined')
        emailError.previousElementSibling.innerText = 'close';
        return false;
    }
    emailError.innerHTML = " ";
    emailError.previousElementSibling.classList.add('material-symbols-outlined')
    emailError.previousElementSibling.innerText = 'check';
    return true;
}


function validatepass() {
    let pass = document.getElementById('pass').value;

    if (pass.length == 0) {
        passError.innerHTML = "pass is required !";
        passError.previousElementSibling.classList.add('material-symbols-outlined')
        passError.previousElementSibling.innerText = 'close';
        return false
    }

    if (!pass.match(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/)) {
        passError.innerHTML = "Password should contain 1 Uppercase , 1 Lowercase, 1 Digit & 1 Alphabet";
        passError.previousElementSibling.classList.add('material-symbols-outlined')
        passError.previousElementSibling.innerText = 'close';
        return false;
    }
    passError.innerHTML = " ";
    passError.previousElementSibling.classList.add('material-symbols-outlined')
    passError.previousElementSibling.innerText = 'check';
    return true;
}