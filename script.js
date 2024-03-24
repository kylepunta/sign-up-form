const userPassword = document.querySelector('#pwd');
const confirmPassword = document.querySelector('#confirm_pwd');
const passwords = document.querySelectorAll('[type="password"]');
console.log(passwords);

passwords.forEach((password) => {
    password.addEventListener('input', () => {
        if (userPassword.value !== confirmPassword.value){
            confirmPassword.classList.add('error');
        }
        else {
            confirmPassword.classList.remove('error');
            confirmPassword.classList.add('valid');
        };
    });
});