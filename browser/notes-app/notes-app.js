let demo = document.getElementById("demo");
demo.style.backgroundColor = "red";
let main_ul = document.getElementById("main-ul");
let para = document.createElement("li");
para.innerHTML = "Hello home people";
main_ul.appendChild(para); 

test = document.getElementsByClassName("test");
array = ["red","green","blue","orange","lightgray"];
for(i=0;i<array.length;i++)
{
    test[i].style.backgroundColor = array[i];
}
let testElement = ["Home","Gallery","About Us","Contact Us","FAQ"];

for(i=0;i<testElement.length;i++)
{
    test[i].innerHTML = testElement[i];
}
