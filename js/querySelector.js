//querySelector will get you retrieved with all the values that you pass inside a querySelector

const wfm = document.querySelector("#book-list li:nth-child(2) .name");
console.log(wfm);

//another example
var books = document.querySelector("#book-list li .name")
console.log(books);

//the above returned only one book though i mentioned books with name class li items in div book list, this is because querySelector returns only 1 element and in case of multiple returns first element
//thus we use querySelector all 

books = document.querySelectorAll("#book-list li .name");
console.log(books);

//therefore it returned in the form of NodeList and we can convert that into array and check for every single values
Array.from(books).forEach(item => console.log(item));