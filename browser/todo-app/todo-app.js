// const paragraphs = document.querySelectorAll("p");

// paragraphs.forEach(function(paragraph){
//     if(paragraph.textContent.includes("the")){
//         paragraph.remove()
//     }
    
// })

const todos = [{
    text: 'Order cat food',
    completed: false,
},{
    text: 'Clean Kitchen',
    completed: true,
},{
    text: 'Buy food',
    completed: true,
},{
    text: 'Do work',
    completed: false,
},{
    text: 'Exercice',
    completed: true,
},{
    text: 'Practical Part',
    completed: true,
}]

const incompleteTodos = todos.filter(function (todo){
    return !todo.completed;
})

const summary = document.createElement('h2');
summary.textContent = `You have ${incompleteTodos.length} todos left`;

document.querySelector('body').appendChild(summary);

todos.forEach(function (todo){
    const p = document.createElement("p");
    p.textContent = todo.text; 
    document.querySelector('body').appendChild(p)
})