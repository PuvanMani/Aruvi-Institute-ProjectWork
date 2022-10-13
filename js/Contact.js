function SendEmail(){
    Email.Send({
        Host: "smtp.gmail.com"
        UserName : "puvanrainayt@gmail.com"
        Password : "Puvanraina03"
        To : "puvanraina03@gmail.com"
        From : document.getElementById('email').value
        Subject : "New Contact From Enquery"
        Body : "Name : " + document.getElementById('firstName').value
        +"<br> Last Name : "+ document.getElementById('lastName').value
        +"<br> Email : "+ document.getElementById('email').value
        +"<br> Message : "+ document.getElementById('massage').value

    }).then{
        message=> alert("Message Was Send Succesfully !!")
    }
   
}