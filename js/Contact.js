
function check(){
var fname=document.getElementById('firstName').value;
var lname=document.getElementById('lastName').value;
var email=document.getElementById('email').value;
var message=document.getElementById('massage').value;
if (fname==''&& email=='' && message==''){
    alert('Please Fill All box')
}
if (fname==''){
    alert("Enter Your Name")
}
else if (email==''){
    alert("Enter Your Email")
}
else if (message==''){
    alert("Enter Your Message")
}
}