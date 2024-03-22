const form = document.querySelector('form');
const fullName=document.getElementById("name")
const email=document.getElementById("email")
const phone=document.getElementById("phone")
const subject=document.getElementById("subject")
const mess=document.getElementById("message")


function sendEmail(){
    const bodyMessage=`Full Name:${fullName.value}<br>Email:${email.value}<br>
    Phone:${phone.value}<br>Message:${mess.value}`;
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "mohanrajgms2006@gmail.com",
        Password : "9698917E2318707558EA27733B934CCCD384",
        To : 'mohanrajgms2006@gmail.com',
        From : "mohanrajgms2006@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => {
        if(message =="OK"){
            Swal.fire({
                title:"Success",
                text:"Message sent Successfully",
                icon:"Success"

            });
        }
    }
    );
}
function checkInputs(){
    const items=document.querySelectorAll(".item");

    for(const item of items){
        if(item.value ==""){
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }
        if(items[1].value !=""){
            checkEmail()
        }
        items[1].addEventListener("keyup",() =>{
            checkEmail()
        })
        item.addEventListener("keyup",()=>{
            if(item.value !=""){
                item.classList.remove("error");
                item.parentElement.classList.remove("error");

            }
            else{
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }

        });
    }
}
function checkEmail(){
    const emailRegex= /^([a-z\d.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
    const errorTxtEmail=document.querySelector(".error-txt.email");
    if(!email.value.match(emailRegex)){
        email.classList.add("error");
        email.parentElement.classList.add("error");

        if(email.value !=""){
            errorTxtEmail.innerText="Enter a Valid Email Address";
        }
        else{
            errorTxtEmail.innerText=" Email Address can't Be blank";

        }
    }
    else{
        email.classList.remove("error");
        email.parentElement.classList.remove("error");

    }
}
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    checkInputs();

     sendEmail();

     form.reset();
     return false;
});