let myInput = document.getElementById("psw");
let letter = document.getElementById("letter");
let capital = document.getElementById("capital");
let number = document.getElementById("number");
let length = document.getElementById("length");

myInput.onfocus = function(){
    document.getElementById("message").style.display = "block"
}
myInput.onblur = function(){
    document.getElementById("message").style.display = "none";
}
myInput.onkeyup = function(){
    var lowercaseletter = /[a-z]/g;
    if(myInput.value.match(lowercaseletter)){
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    }else{
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }

    var capitalLetter = /[A-Z]/g;
    if(myInput.value.match(capitalLetter)){
        capital.classList.remove("invalid");
        capital.classList.add("valid");
    }else{
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }

    var numberLetter = /[0-9]/g;
    if(myInput.value.match(numberLetter))
    {
        number.classList.remove("invalid");
        number.classList.add("valid");
    }else{
        number.classList.remove("valid");
        number.classList.add("invalid")
    }

    if(myInput.value.length >= 8)
    {
        length.classList.remove("invalid");
        length.classList.add("valid");
    }else{
        length.classList.remove("valid");
        length.classList.add("invalid");
    }
}