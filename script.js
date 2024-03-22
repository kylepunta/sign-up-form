const pwdInputs = document.querySelectorAll('[type="password"]');
const pwd = document.querySelector('[name="password"]');
const confirmPwd = document.querySelector('[name="confirmpassword"]');
const submit = document.querySelector('button');

// if (pwd != confirmPwd){
//     pwdInputs.forEach((password) => {
//         password.classList.add('error');
//     });
// }

console.log(pwd.value);
// console.log(confirmPwd.value);

// submit.addEventListener('click', () => {
//     console.log(pwd.value);
//     console.log(confirmPwd.value);
// });

pwdInputs.forEach((password) => {
    password.addEventListener('input', () => {
        console.log(password.value);
        if (pwd.value === confirmPwd.value){
            confirmPwd.classList.add('error');
        };
    });
});