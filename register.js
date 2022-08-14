
// HAMBURGER BUTTON
const menu_open = document.querySelector('.menu_open');
const menu_close = document.querySelector('.menu_close');
const toggle = document.querySelector('.toggle');
const nav_links = document.querySelector('.nav-links');

// PASSWORD VISIBILITY
const password =document.querySelector('#password');
const open_eye = document.querySelector('.open-eye');
const close_eye = document.querySelector('.close-eye');

// FORM
const form = document.querySelector('.form');
const full_name = document.querySelector('#full-name');
const email = document.querySelector('#email');
const username = document.querySelector('#username');
const register = document.querySelector('#submit');

// FORM VALUES


// ERRORS
const register_error = document.querySelector('.register-error')
const name_error = document.querySelector('#name-error');
const name_granted = document.querySelector('#name-granted');
const email_error = document.querySelector('#email-error');
const email_granted = document.querySelector('#email-granted');
const user_error = document.querySelector('#user-error');
const user_granted = document.querySelector('#user-granted');
const pass_error = document.querySelector('#pass-error');
const pass_granted = document.querySelector('#pass-granted');


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


// LOGIN FORM VALIDATION

// validating Full name
function validateFullName(){
const full_nameVal = full_name.value;
    if (full_nameVal.length == 0){
        name_error.innerHTML = "Name is required";
        name_granted.innerHTML = '';
        return false;
    }
    if (!full_nameVal.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        name_error.innerHTML = 'Write your first and last names';
        name_granted.innerHTML = '';
        return false;
    }
    name_granted.innerHTML = '<i class="fas fa-check"></i>';
    name_error.innerHTML = '';
    return true
}

full_name.addEventListener('keyup', validateFullName)

// validating Email

function validateEmail(){
const emailVal = email.value;

    if (emailVal.length == 0){
        email_error.innerHTML = "Email is required";
        email_granted.innerHTML = '';
        return false;
    }

    if(!emailVal.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        email_error.innerHTML = "Input Valid Email";
        email_granted.innerHTML = '';
        return false;
    }
    
    email_granted.innerHTML = '<i class="fas fa-check"></i>';
    email_error.innerHTML = "";
    return true;

}

email.addEventListener('keyup', validateEmail)

// validating Username

function validateUserName(){
const usernameVal = username.value;
    if (usernameVal.length == 0){
        user_error.innerHTML = 'Username is required';
        user_granted.innerHTML = ''
        return false;
    }

    if (usernameVal.indexOf(' ') >= 0 ){
        user_error.innerHTML = 'Username should not have white spaces';
        user_granted.innerHTML = '';
        return false;
    }

    user_error.innerHTML = ''
    user_granted.innerHTML = '<i class="fas fa-check"></i>'
    return true;
}

username.addEventListener('keyup', validateUserName)

// validating Password
function validatePass(){
const passwordVal = password.value; 
    if (passwordVal.length == 0){
        pass_error.innerHTML = 'Password is required, between 3-15 characters';
        pass_granted.innerHTML = '';
        return false;
    }

    if (passwordVal.length <= 3 && passwordVal.length > 0){
        pass_error.innerHTML = 'Password should be more than 3 characters';
        pass_granted.innerHTML = '';
        return false;
    }

     if (passwordVal.length > 8){
        pass_error.innerHTML = 'Password should not be more than 15 characters';
        pass_granted.innerHTML = '';
        return false;
    }
    pass_granted.innerHTML = '<i class="fas fa-check"></i>';
    pass_error.innerHTML = '';
    return true;
}

password.addEventListener('keyup', validatePass)

// Account number generator
function genAccNum(){
    return Math.floor(Math.random()* 10000000000)
}

// Validating all inputs  before storing in the local storage

form.addEventListener('submit', function(e){
    e.preventDefault();

    if (!validateFullName() || !validateEmail() || !validateUserName() || !validatePass()){
        register_error.innerHTML = 'Fix all errors';
        register_error.style.display = 'block';
        setTimeout(() => {
            register_error.style.display = 'none';
        }, 3000);
        // password.style.display = ''
        name_granted.innerHTML = ''; 
        email_granted.innerHTML = ''; 
        user_granted.innerHTML = ''; 
        pass_granted.innerHTML = ''; 
        form.reset();
        return;
    }
    const fullName = e.target.fullname.value;
    const email = e.target.email.value;
    const username = e.target.username.value;
    const password = e.target.password.value;
    let user = {
        fullName: fullName,
        email: email,
        username: username,
        password: password,
        amount: 0,
        accNum: genAccNum()
    }
    const formData = JSON.parse(localStorage.getItem("user")) || [];

    let userExist = formData.filter (user => {
        return email === user.email;
    })
    
// if user exist in the registration storage. do this
    if (userExist.length){
        alert('Email already exists');
        name_granted.innerHTML = ''; 
        email_granted.innerHTML = ''; 
        user_granted.innerHTML = ''; 
        pass_granted.innerHTML = ''; 
        form.reset();
    }else{
        alert('Account Created sucessfully!. \n Click "OK" to Login')
        formData.push(user)
        localStorage.setItem("user", JSON.stringify(formData))
        location.href = './login.html';  
        form.reset();   
    } 
})




