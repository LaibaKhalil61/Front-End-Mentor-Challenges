const form = document.getElementById("form");
const first_name =document.getElementById("first-name");
const email =document.getElementById("email");
const password =document.getElementById("password");
const confirm_password =document.getElementById("confirm-password");
const dateOfBirth = document.getElementById("date-of-birth");
const city = document.getElementById("city");
const country = document.getElementById("country");
const phone_no = document.getElementById("phone_no");
let submit = true;
const ValidateFirstName = ()=>{
    // For username
    if(first_name.value === "")
        {
            addErrorFor(first_name,"First Name cannot be blank");
            submit = false;
        }
        else{
            addSuccessFor(first_name);
        }
}
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
const ValidateConfirmPassword = ()=>{
    // For Confirm password
    if(confirm_password.value === "")
        {
            addErrorFor(confirm_password,"confirm password cannot be blank");
            submit = false;
        }
        else if(confirm_password.value != password.value)
            {
                addErrorFor(confirm_password,"Does not match with above password");
                submit = false;
            }
        else{
            addSuccessFor(confirm_password);
        }
}
const ValidateDOB = ()=>{
     // For date of birth
     if(dateOfBirth.value === "")
        {
            addErrorFor(dateOfBirth,"Date Of Birth cannot be blank");
            submit = false;
        }
        else{
            addSuccessFor(dateOfBirth);
        }
}
const ValidatephoneNo = ()=>{
     
    // For Phone No
    if(phone_no.value === "")
        {
            addErrorFor(phone_no,"Phone Number cannot be blank");
            submit = false;
        }
        else{
            addSuccessFor(phone_no);
        }
    return submit;
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
    ValidateFirstName();
    validateEmailAddress();
    ValidatePassword();
    ValidateConfirmPassword();
    ValidateDOB();
    ValidatephoneNo();
    if(!submit)
        event.preventDefault();
    return submit;
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