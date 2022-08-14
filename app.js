
// PRELOADER
const preload = document.querySelector('#preloader');

// HAMBURGER BUTTON
const menu_open = document.querySelector('.menu_open');
const menu_close = document.querySelector('.menu_close');
const toggle = document.querySelector('.toggle');
const nav_links = document.querySelector('.nav-links');

// PASSWORD VISIBILITY
const password =document.querySelector('#password');
const open_eye = document.querySelector('.open-eye');
const close_eye = document.querySelector('.close-eye');

// CONFIRM PASSWORD VISIBILITY
const confirm_password =document.querySelector('#confirm-password');
const confirm_open_eye = document.querySelector('.confirm-open-eye');
const confirm_close_eye = document.querySelector('.confirm-close-eye');

// FORM
const form = document.querySelector('.form');
const user = document.querySelector('#username')
// const input = document.querySelector('input')
const login = document.querySelector('#submit');
const username_error = document.querySelector('.username-error');
const user_granted = document.querySelector('.user-granted');
const password_error = document.querySelector('.pass-error');
const pass_granted = document.querySelector('.pass-granted');
const login_error = document.querySelector('.login-error');

// PRELOADER
window.addEventListener('load', function(){
    preload.style.display = 'none';
})

// HAMBURGER BUTTON
menu_open.addEventListener('click', function(){
    nav_links.style.display = 'initial';
    menu_open.style.display = 'none';
    menu_close.style.display = 'initial';
})

menu_close.addEventListener('click', function(){
    nav_links.style.display = 'none';
    menu_open.style.display = 'initial';
    menu_close.style.display = 'none';
})

// PASSWORD VISIBILITY
close_eye.addEventListener('click', function(){
   if(password.type === 'password'){
        password.type = 'text';
        close_eye.style.display = 'none';
        open_eye.style.display = 'initial';
   }

})

open_eye.addEventListener('click', function(){
   if(password.type === 'text'){
        password.type = 'password';
        close_eye.style.display = 'initial';
        open_eye.style.display = 'none';
   }

})

// CONFIRM PASSWORD VISIBILITY
confirm_close_eye.addEventListener('click', function(){
   if(confirm_password.type === 'password'){
        confirm_password.type = 'text';
        confirm_close_eye.style.display = 'none';
        confirm_open_eye.style.display = 'initial';
   }
})

confirm_open_eye.addEventListener('click', function(){
   if(confirm_password.type === 'text'){
        confirm_password.type = 'password';
        confirm_close_eye.style.display = 'initial' ;
        confirm_open_eye.style.display = 'none';
   }
})

// LOGIN FORM VALIDATION
function validateName(){

const username = document.querySelector('#username').value;

    if (username.length == 0){
        username_error.innerHTML = 'Username is required';
        user_granted.innerHTML = ''
        return;
    }
    if (username.length > 0){
        username_error.innerHTML = ''
        user_granted.innerHTML = '<i class="fas fa-check"></i>'
        return;
    }
    
}

function validatePass(){

const pass = document.querySelector('#password').value;

    if (pass.length == 0){
        password_error.innerHTML = 'Password is required, between 3-15 characters';
        pass_granted.innerHTML = '';
        return;
    }
    if (pass.length <= 3 && pass.length > 0){
        password_error.innerHTML = 'Password should be more than 3 characters';
        pass_granted.innerHTML = '';
        return;
    }

     if (pass.length > 8){
        password_error.innerHTML = 'Password should not be more than 15 characters';
        pass_granted.innerHTML = '';
        return;
    }

    if (pass.length > 3 && pass.length == 9){
        password_error.innerHTML = '';
        pass_granted.innerHTML = '';
        return;
    }

    pass_granted.innerHTML = '<i class="fas fa-check"></i>';
    password_error.innerHTML = '';
    return true;
}

function validateForm(e){
    if (!validateName() || !validatePass()){
        login_error.innerHTML = 'Fix all errors';
        user.style.display = ''
        password.style.display = ''
        return false;
    }
}






