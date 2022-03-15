
// alert("hi")

var form = document.getElementById("jsform");
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    validation();
} );


function validation(){

    var name= document.getElementById("name").value.trim();
    var pho = document.getElementById("pho").value.trim();
    var email = document.getElementById("email").value.trim();
    var message = document.getElementById("message").value.trim();
    var err_msg = document.getElementById("err-sms").value;
    err_msg.style.padding = "10px";
    err_msg.style.color = "red";
    var text;


    // condition for user name
    if((name ==="")|| (name.length <3)){
        text= "Please Enter valid Name more than 3 chaacter";
        err_msg.innerHTML = text;
        return false;
    }
    if(!isNaN(name)){
        text= "please enter valid phone";
        err_msg.innerHTML = text;
        return false;
    }

    // condition for phone
    if((pho ==="")|| (pho.length <10)||(pho.length>14)){
        text= "Please Enter Phone number between 10 to 14 digit";
        err_msg.innerHTML = text;
        return false;
    }
    if(isNaN(pho)){
        text= "please enyte valid phone";
        err_msg.innerHTML = text;
        return false;
    }

    // condition for email
    if((email ==="")|| (email.length <6)){
        text= "Please Enter valid Email";
        err_msg.innerHTML = text;
        return false;
    }
    if(email.indexOf("@") == -1 ){
        text= "Please Enter valid Email";
        err_msg.innerHTML = text;
        return false;
    }

    // condition for message
    if (message.length <120){
        text= "Please Enter message not more than 140 charac";
        err_msg.innerHTML = text;
        return false;
}



}