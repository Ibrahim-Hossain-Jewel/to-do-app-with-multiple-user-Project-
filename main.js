const successMessage = document.querySelector(".successMessage");
function registration(jewel){
    
    localStorage.setItem('firstname',jewel.firstname.value);
    localStorage.setItem('lastname',jewel.lastname.value);
    localStorage.setItem('email',jewel.emailaddress.value);
    localStorage.setItem('password',jewel.password.value);
    localStorage.setItem('checkbox',jewel.checkbox.value);
    
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
    if(form.email.value === localStorage.email && form.password.value === localStorage.password){
        window.open('dashboard.html');
    }
    else{
        alert("Wrong combination");
    }
}
//end the login system code.
//starting the to do list form code below.
//const list = document.getElementById("list");
const tododatalist = document.getElementById("tododatalist");
var ourlist = [];
var counter = 0;
function todoList(form) {
    counter++;
    let value = 'value'+counter;
    const listValue = form.listdata.value;
    window.localStorage.setItem(value,listValue);
    const li = document.createElement('li');
    li.innerText = window.localStorage.getItem(value);
    tododatalist.appendChild(li);
    // const li = document.createElement('li');
    // li.innerText = listValue;
    // tododatalist.appendChild(li);
    // let value = 'value'+counter;
    // window.localStorage.setItem(value,li.innerText);
    // console.log(window.localStorage.getItem(value));
}
