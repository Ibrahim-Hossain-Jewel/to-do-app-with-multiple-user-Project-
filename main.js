
const successMessage = document.querySelector(".successMessage");

var userCounter = 0;
function registration(jewel){
    userCounter++;
    let fusername = 'firstname'+userCounter;
    let flusername = 'lastname'+userCounter;
    let femail = 'email'+userCounter;
    let fpassword = 'password'+userCounter;
    let fcheckbox = 'checkbox'+userCounter;
    //encrypting password
    let encryptPassword = CryptoJS.AES.encrypt(jewel.password.value, "Secret Passphrase");
    localStorage.setItem(fusername,jewel.firstname.value);
    localStorage.setItem(flusername,jewel.lastname.value);
    localStorage.setItem(femail,jewel.emailaddress.value);
    localStorage.setItem(fpassword,encryptPassword);//stored the encrypted password now decrypt the stored password in plain text.

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
//Testing to decrypt the password in javascript.

//console.log(CryptoJS.AES.decrypt(localStorage.password1, "Secret Passphrase").toString(CryptoJS.enc.Utf8));

//Code for login system in javascript.
function userlogin(form) {
    if(form.email.value === localStorage.email1 && form.password.value === CryptoJS.AES.decrypt(localStorage.password1, "Secret Passphrase").toString(CryptoJS.enc.Utf8)){
        window.open('userData/user1/dashboard.html');
    }
    else if(form.email.value === localStorage.email2 && form.password.value === CryptoJS.AES.decrypt(localStorage.password2, "Secret Passphrase").toString(CryptoJS.enc.Utf8)){
        window.open('userData/user2/dashboard.html');
    }
    else if(form.email.value === localStorage.email3 && form.password.value === CryptoJS.AES.decrypt(localStorage.password3, "Secret Passphrase").toString(CryptoJS.enc.Utf8)){
        window.open('userData/user3/dashboard.html');
    }
    else if(form.email.value === localStorage.email4 && form.password.value === CryptoJS.AES.decrypt(localStorage.password4, "Secret Passphrase").toString(CryptoJS.enc.Utf8)){
        window.open('userData/user4/dashboard.html');
    }
    else if(form.email.value === localStorage.email5 && form.password.value === CryptoJS.AES.decrypt(localStorage.password5, "Secret Passphrase").toString(CryptoJS.enc.Utf8)){
        window.open('userData/user5/dashboard.html');
    }
    else if(form.email.value === localStorage.email6 && form.password.value === CryptoJS.AES.decrypt(localStorage.password6, "Secret Passphrase").toString(CryptoJS.enc.Utf8)){
        window.open('userData/user6/dashboard.html');
    }
    else if(form.email.value === localStorage.email7 && form.password.value === CryptoJS.AES.decrypt(localStorage.password7, "Secret Passphrase").toString(CryptoJS.enc.Utf8)){
        window.open('userData/user7/dashboard.html');
    }
    else if(form.email.value === localStorage.email8 && form.password.value === CryptoJS.AES.decrypt(localStorage.password8, "Secret Passphrase").toString(CryptoJS.enc.Utf8)){
        window.open('userData/user8/dashboard.html');
    }
    else if(form.email.value === localStorage.email9 && form.password.value === CryptoJS.AES.decrypt(localStorage.password9, "Secret Passphrase").toString(CryptoJS.enc.Utf8)){
        window.open('userData/user9/dashboard.html');
    }
    else if(form.email.value === localStorage.email10 && form.password.value === CryptoJS.AES.decrypt(localStorage.password10, "Secret Passphrase").toString(CryptoJS.enc.Utf8)){
        window.open('userData/user9/dashboard.html');
    }
    else{
        alert("Incorrect your email or password");
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
