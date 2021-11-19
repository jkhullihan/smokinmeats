function ValidateEmail(InputText)
{
    var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(InputText.value.match(mailFormat))
    {
        alert("You have entered a valid email");
        document.form1.text1.focus();
        return true;
        
    }
    else{
        alert("You have entered an invalid email");
        document.form1.text1.focus();
        return false;
    }

}