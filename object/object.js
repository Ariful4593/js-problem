let mybook = {
    title: '1984',
    author: 'Ariful Islam',
    pageCount: 326
}

let otherbook = {
    title: 'A People History',
    author: 'Philadelphia',
    pageCount: 723
}

let getSummary = function (book){
    return{
        summary: `${book.title} by ${book.author}`,
        pageCountsummary: `${book.title} is ${book.pageCount} pages long`
    }
    // console.log(`${book.title} by ${book.author} and her page is ${book.pageCount}`)
}


// function getSummary(book){
//     console.log(`${book.title} by ${book.author} and her page is ${book.pageCount}`)
// }

let bookSummary = getSummary(mybook);
let otherBookSummary = getSummary(otherbook);
console.log(bookSummary.pageCountsummary);
console.log(otherBookSummary);