var books = document.querySelectorAll("#book-list li .name");
Array.from(books).forEach( item => item.textContent+=' :adding text');
Array.from(books).forEach(item => console.log(item));
const book = document.querySelector('#book-list');
console.log(book.innerHTML);
//therefore not only can you work with textContent with also with entire html i.e you can change entire html or replace it or add more html to the existing html e.g
book.innerHTML+='<p>This is how you add to existing html</p>'
console.log(book.innerHTML);