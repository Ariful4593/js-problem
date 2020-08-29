function uppertest(){
    let name = document.getElementById("para").value;
    let convert = name.toUpperCase();
    document.getElementById("demo").innerHTML = convert;
}

// let name = 'Ariful Islam';
// console.log(name);
// selimkha
let validPassword = function(password){
    if(password.length > 8 && !password.includes('valtexin'))
    {
        return true;
    }
    else{
        return false;
    }
}

console.log(validPassword('Selimkhan'));
console.log(validPassword('arifulislam'))