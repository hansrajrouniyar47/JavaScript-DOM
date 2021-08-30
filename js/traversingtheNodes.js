
const bookListN = document.querySelector("#book-list");

console.log(bookListN);

//You can get parent nodes of any nodes with parentNode or parentelement

console.log(bookListN.parentNode);
console.log(bookListN.parentElement);

//with childNodes you do get all the successive nodes i.e all the sections including extra details
console.log(bookListN.childNodes);

//with children you get the refined details i.e only the children which are elements and not asa node in whole in actual
console.log(bookListN.children);

//for finding the next and previous siblings of any node and you can also filter out for only the elements siblings.

console.log(bookListN.nextSibling);
console.log(bookListN.nextElementSibling);
console.log(bookListN.previousSibling);
console.log(bookListN.previousElementSibling);

bookListN.previousElementSibling.querySelector("p").innerHTML+='<br /> Too cool place for you to be!';




