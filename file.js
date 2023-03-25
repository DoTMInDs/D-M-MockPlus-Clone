function validateTextbox(){
    confirm("Click OK if the deatails are correct")

    var box2 = document.getElementById("code")

    if (box2.value.length <= 5){
    alert ("incorrect input, try again")
    
    box2.focus()
    
    box2.style.border = "3px solid red"
    return false
}
}

function goToLoginPage(){
    window.location = "form.html"

}

function goToRegisterPage(){
    window.location = "register.html"
}



function validateAccount(){
    confirm("Click OK if the deatails are correct")

    var account = document.getElementById("code")
    var account2 = document.getElementById("code2")

    if (account.value.length <= 5 || account2.value.length <= 5){
    alert ("incorrect input, try again")
    
    account.focus()
    account2.focus()
    
    account.style.border = "3px solid red"
    account2.style.border = "3px solid red"
    return false
}
}

function goToLoginPage(){
    window.location = "form.html"
}
function goToOpenRegisterPage(){
    window.location = "register.html"
}
function goToHome(){
    window.location = "index.html"
}
function goToHomePage(){
    window.location = "index.html"
}



var slidemenu = document.getElementById("slidemenu");

function openmenu(){
    slidemenu.style.right = '0'
}
function closemenu(){
    slidemenu.style.right = '-250px'
}