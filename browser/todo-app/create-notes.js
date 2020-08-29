document.querySelector('#create').addEventListener("click", function(e){
    p = document.createElement('button');
    p.textContent = "Ariful Islam";
    p.style.backgroundColor = "lightgray"
    e.target.textContent = "Button Clicked"
    document.querySelector('body').appendChild(p);
})

document.querySelector("#remove").addEventListener("click", function(){
    document.querySelectorAll(".note").forEach(function (note){
        note.remove()
    })
})

document.querySelector("#check").addEventListener('input', function(e){
    document.getElementById("demo").innerText = e.target.value
})