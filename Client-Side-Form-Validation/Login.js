const form = document.getElementById("form");
const email =document.getElementById("email");
const password =document.getElementById("password");
let submit = true;
const ValidatePassword = ()=>{
     // For Password
     if(password.value === "")
        {
            addErrorFor(password,"Password cannot be blank");
            submit = false;
        }
        else{
            addSuccessFor(password);
        }
}
const validateEmailAddress = ()=>{
    // For Email
    if(email.value === "")
    {
        addErrorFor(email,"Email cannot be blank");
        submit = false;
    }
    else if(!validateEmail()){
        addErrorFor(email,"Enter valid email");
        submit = false;
    }
    else{
        addSuccessFor(email);
    }
}
const Validate = (event)=>{
    validateEmailAddress();
    ValidatePassword();
    if(!submit)
        event.preventDefault();
}
function addErrorFor(input,error_msg){
    const form_control = input.parentNode;
    // console.log(form_control)
    form_control.className = "form-control error";
    const msg = form_control.querySelector("span");
    msg.innerText = error_msg;
}
function addSuccessFor(input){
    const form_control = input.parentNode;
    form_control.className = "form-control success";
}
function validateEmail(){
    return /[a-zA-Z0-9_.]+@[a-z0-9_.]+\.[a-z]{2,}/.test(email.value);
}