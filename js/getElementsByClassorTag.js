//We can get elements by class or tag name and the values are returned in the form of HTML collection which is something like arrays but again it is not purely array so we can't use array methods in it therefore if we want to iterate over the elements we can use a simple for loop or if we want to use forEach, we convert it into array

var titles = document.getElementsByClassName('title');

Array.from(titles).forEach(function(item) {
  console.log(item);
})

//similarly if you have a list of book names with some tag so you could derive tag names and manipulate over them with document.getElementByTag('')
//you could work either ways