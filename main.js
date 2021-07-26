const successMessage = document.querySelector(".successMessage");
var userCounter = 0;
function registration(jewel){
    userCounter++;
    let fusername = 'firstname'+userCounter;
    let flusername = 'lastname'+userCounter;
    let femail = 'email'+userCounter;
    let fpassword = 'password'+userCounter;
    let fcheckbox = 'checkbox'+userCounter;

    localStorage.setItem(fusername,jewel.firstname.value);
    localStorage.setItem(flusername,jewel.lastname.value);
    localStorage.setItem(femail,jewel.emailaddress.value);
    localStorage.setItem(fpassword,jewel.password.value);
    localStorage.setItem(fcheckbox,jewel.checkbox.value);
    
    successMessage.innerHTML = `<h1>Registration successful <a href = "login.html">Please login</a></h1>`;
    if (localStorage.firstname === "") {
        console.log("first name empty")
    }
    else if (localStorage.lastname === '') {
        console.log("last name empty");
    }
    else if (localStorage.email === '') {
        console.log("email address empty");
    }
    jewel.reset();
    
}
//Code for login system in javascript.
function userlogin(form) {
    if(form.email.value === localStorage.email2 && form.password.value === localStorage.password2){
        window.open('dashboard.html');
    }
    else{
        alert("Wrong combination");
    }
}
//end the login system code.
//starting the to do list form code below.
//const list = document.getElementById("list");

var counter = 0;
function todoList(form) {
    counter++;
    let value = 'value'+counter;
    const listValue = form.listdata.value;
    window.localStorage.setItem(value,listValue);
    alert('Data sent to your Dashboard');
    form.reset();

}
