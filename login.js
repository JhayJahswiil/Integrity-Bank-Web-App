// DOM ELEMENTS // DOM ELEMENTS // DOM ELEMENTS
// DOM ELEMENTS

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
// const email = document.querySelector('#email')
const login = document.querySelector('#submit');
const email_error = document.querySelector('.email-error');
const email_granted = document.querySelector('.email-granted');
const pass_error = document.querySelector('.pass-error');
const pass_granted = document.querySelector('.pass-granted');
const login_error = document.querySelector('.login-error');

// END OF DOM ELEMENTS // END OF DOM ELEMENTS //END OF DOM ELEMENTS
// END OF DOM ELEMENTS


// DOM IMPLEMENTATIONS

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


// user.addEventListener('keyup', validateName)


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


// let exist = JSON.parse(localStorage.getItem('user'));

form.addEventListener('submit', function(e){
    e.preventDefault();
    if (!validateEmail() || !validatePass()){
        login_error.innerHTML = 'Fix all errors';
        login_error.style.display = 'block';
        setTimeout(() => {
            login_error.style.display = 'none';
        }, 3000);
        email.value = "";
        password.value = "";
        pass_granted.innerHTML = '';
        email_granted.innerHTML = '';
    }
    const email = e.target.email.value;
    const password = e.target.password.value;

    let user ={
        email,
        password
    }

    const formData = JSON.parse(localStorage.getItem("user")) || []

    let matchedUser = formData.filter (user => {
        return email === user.email && password === user.password;
    })

// if user exist in the registration storage. do this
    if (matchedUser.length){
        localStorage.setItem("login_details", JSON.stringify(user));
        location.href = './dashboard.html';
        form.reset();        
    }else{
        alert('Incorrect details');
        form.reset(); 
        email_granted.innerHTML = '';
        pass_granted.innerHTML = '';
        return;
    }


    // localStorage.setItem("formData", JSON.stringify(user));
    
    


    
})






