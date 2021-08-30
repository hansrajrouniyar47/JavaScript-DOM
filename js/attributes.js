var book = document.querySelector('li:first-child .name');
console.log(book);

//for getting the attribute 
console.log(book.getAttribute('class'));

//for setting the attribute
book.setAttribute('class','name-2');
console.log(book.getAttribute('class'));

//to check if it has attributes or not
console.log(book.hasAttribute('class'));

//to remove attributes
console.log(book.removeAttribute('class'));

console.log(book.hasAttribute('class'));


