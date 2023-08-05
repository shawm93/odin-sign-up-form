const password = document.querySelector("#password");
const confirm_pwd = document.querySelector("#confirm_pwd");
const confirm_pwd_p = document.querySelector(".confirm_pwd");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const email_p = document.querySelector(".email");
const phone_p = document.querySelector(".phone");
const btn = document.querySelector("button");

confirm_pwd.addEventListener('input', () => {
    if (confirm_pwd.value === password.value && confirm_pwd.value != "") {
        confirm_pwd_p.hidden = true;
    }

    if (confirm_pwd.value != password.value) {
        confirm_pwd_p.hidden = false;
    }
})

password.addEventListener('input', () => {
    if (confirm_pwd.value === password.value && confirm_pwd.value != "") {
        confirm_pwd_p.hidden = true;
    }

    if (confirm_pwd.value != password.value) {
        confirm_pwd_p.hidden = false;
    }
})

btn.addEventListener('click', () => {
    if (!email.checkValidity()) email_p.hidden = false;
    if (!phone.checkValidity()) phone_p.hidden = false;
    if (email.checkValidity()) email_p.hidden = true;
    if (phone.checkValidity()) phone_p.hidden = true;
})